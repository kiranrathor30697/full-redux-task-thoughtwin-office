import { DECREMENT, INCREMENT, LOGIN, LOGOUT, REGISTER } from "../Constants/constants"

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

export const loginActionCreator = () => {
    return {
        type : LOGIN
    }
}

export const logoutActionCreator = () => {
    return {
        type:LOGOUT
    }
}