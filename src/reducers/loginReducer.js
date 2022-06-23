import { LOGIN } from "../Constants/constants";
import { login_data } from "../pages/initialState/InitialState";

export const loginReducer = (state=login_data,action) => {
    switch(action.type){
        case LOGIN :
            return {
                ...state,
                login_info:action.payload
            }
    }
    return state;
}