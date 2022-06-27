import axios from 'axios';
import { employDelActionCreator } from '../action_creator/actionCreator';

export default function deleteMiddle(id,token) {
  return async(dispatch)=>{
    try {
        let del_data = await axios.delete('http://192.168.1.11:8000/api/employees/'+id,{
            headers:{
                Authorization:token
            }
        })
        // console.log(del_data);
        if(del_data.status ==200){
            alert('Data Deleted Successfully')
        }
        await dispatch(employDelActionCreator(del_data))
    } catch (error) {
        console.log(error)
    }
  }
}
