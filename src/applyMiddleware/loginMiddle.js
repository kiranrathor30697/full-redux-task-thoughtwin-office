import axios from "axios"
import { Link } from "react-router-dom";
import { loginActionCreator } from "../action_creator/actionCreator";

export const loginMiddle = (login_Data) => {

  return async(dispatch)=>{
      try {
        const loginApi = await axios.post('http://192.168.1.11:8000/api/user/login',login_Data);
        // console.log(loginApi);
        const token = loginApi.data.data.token
        // console.log(token)
        if(loginApi.status == 200){
          localStorage.setItem('token',JSON.stringify(token))
         }
        dispatch(loginActionCreator(loginApi));
       
      } catch (error) {
        console.log(error)
      }
  }
}