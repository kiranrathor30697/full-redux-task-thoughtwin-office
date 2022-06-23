import axios from 'axios';
import {registerActionCreator} from '../action_creator/actionCreator'

let registerMiddle = (regi_data) => {
  
  return async (dispatch) => {
      try {
          let reg = await axios.post('http://192.168.1.11:8000/api/user/register',regi_data)
             console.log(reg)
            if(reg.status == 201){
              console.log('okfdcsvdcgv');
            }
          dispatch(registerActionCreator(reg))

      } catch (error) {
          console.log(error)
      }
  }
}

export default registerMiddle;