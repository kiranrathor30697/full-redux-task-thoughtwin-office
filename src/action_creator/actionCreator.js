import { DECREMENT, DELETEEMPLOYEES, INCREMENT, LOGIN, LOGOUT, REGISTER, TABLEDATA, UPDATEEMPLOYEES } from "../Constants/constants"

export const incrementActionCreator = () => {
    return {
        type:INCREMENT
    }
}

export const decrementActionCreator = () => {
    return {
        type:DECREMENT
    }
}

export const registerActionCreator = (regiser) => {
    return {
        type : REGISTER,
        payload:regiser
    }
}

export const loginActionCreator = (login_user) => {
    return {
        type : LOGIN,
        payload:login_user
    }
}

export const tableActionCreator = (get_tbl) => {
    return {
        type:TABLEDATA,
        payload:get_tbl.data
    }
}

export const employDelActionCreator = (del_data) => {
    // console.log(del_data)
    return {
        type:DELETEEMPLOYEES,
        payload:del_data
    }
}

export const updateEmpActionCreator = (updt_data) => {
    return{
        type:UPDATEEMPLOYEES,
        payload:updt_data.data
    }
}

export const logoutActionCreator = () => {
    return {
        type:LOGOUT
    }
}