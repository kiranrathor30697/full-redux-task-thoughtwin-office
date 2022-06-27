import axios from "axios"
import { updateEmployeesActionCreator } from "../action_creator/actionCreator"

export default function updateEmployeesMiddle(id,token,updateData) {
  return async(dispatch)=>{
    //   console.log(updateData)
    try {
        let updt_emp_data = await axios.patch("http://192.168.1.11:8000/api/employees/"+id,{
            name:updateData.name,
            email:updateData.email,
            dob:updateData.dob,
            position:updateData.position,
            technologies_known:updateData.technologies_known,
            technologie_type:updateData.technologie_type,
        },{
            headers:{
                Authorization:token
              }
        })

        console.log(updt_emp_data)

       await dispatch(updateEmployeesActionCreator(updt_emp_data))
    } catch (error) {
        console.log(error)
    }
  }
}
