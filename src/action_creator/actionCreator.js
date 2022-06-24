import { DECREMENT, DELETEEMPLOYEES, INCREMENT, LOGIN, LOGOUT, REGISTER, TABLEDATA } from "../Constants/constants"

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

export const logoutActionCreator = () => {
    return {
        type:LOGOUT
    }
}

export const tableActionCreator = (get_tbl) => {
    return {
        type:TABLEDATA,
        payload:get_tbl.data
    }
}

export const employDelActionCreator = () => {
    return {
        type:DELETEEMPLOYEES
    }
}