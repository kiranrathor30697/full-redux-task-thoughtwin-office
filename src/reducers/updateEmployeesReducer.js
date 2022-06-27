import { NEWUPDATEEMPLOYEES } from "../Constants/constants"

const initialData = {
    updt_emp :[]
}
export const updateEmployeesReducer = (state=initialData,action) => {
    switch(action.type){
        case NEWUPDATEEMPLOYEES:
            return{
                ...state,
                my_updt_emp:action.payload
            }
    }
    return state
}