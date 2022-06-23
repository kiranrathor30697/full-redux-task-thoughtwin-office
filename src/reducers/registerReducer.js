import { REGISTER } from "../Constants/constants";

let initialState = {
    regi_info:{}
}

export const registerReducer = (state=initialState,action) => {
    let newState = state
    switch(action.type){
        
        case REGISTER:
            return {
                ...state,
                regi_info:action.payload
            };
    }
    return newState;
}