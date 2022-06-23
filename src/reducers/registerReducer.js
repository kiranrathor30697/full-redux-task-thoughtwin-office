import { DECREMENT, INCREMENT, LOGIN, LOGOUT, REGISTER } from "../Constants/Constants";
import { regiser_info } from "../pages/initialState/InitialState";

export const registerReducer = (state=regiser_info,action) => {
    let newState = state
    // console.log('register------------------->',newState)
    switch(action.type){

        case REGISTER:
            return;

        case LOGIN:
            return;

        case LOGOUT :
            return

        default:
            return newState;
    }
    
}