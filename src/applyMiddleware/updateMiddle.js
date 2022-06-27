import axios from "axios"
import { updateEmpActionCreator } from "../action_creator/actionCreator";

export default function updateMiddle(id,token) {
  return  async(dispatch)=>{
    try {
        let get_updt_data =await axios.get('http://192.168.1.11:8000/api/employees/'+id,{
          headers:{
            Authorization :token
          }
        });
        // console.log(get_updt_data.data)
        await dispatch(updateEmpActionCreator(get_updt_data))
    } catch (error) {
        console.log(error)
    }
  }
}
