import { DECREMENT, INCREMENT, LOGIN, LOGOUT, REGISTER } from "../Constants/constants";
import { initialState } from "../pages/initialState/InitialState";

export const reducer1 = (state=initialState,action) => {
    let newState = state
    // console.log('inc_dec----------------->',newState)
    switch(action.type){
        case INCREMENT:
           return newState+1;
         
        case DECREMENT:
           return newState? newState.lenght >= 0 ? newState :newState-1 : newState;

        default:
            return newState;
    }
    
}