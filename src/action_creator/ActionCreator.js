import { DECREMENT, INCREMENT, LOGIN, LOGOUT, REGISTER } from "../Constants/Constants"
import { regiser_info } from "../pages/initialState/InitialState"

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

export const registerActionCreator = () => {
    return {
        type : REGISTER,
        payload:regiser_info
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