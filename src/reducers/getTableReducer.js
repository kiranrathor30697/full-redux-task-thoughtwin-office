import { TABLEDATA } from "../Constants/constants";

const initialData = {
    get_tbl_emp:[]
}
export const getTableReducer = (state=initialData,action) => {
    // console.log(state);
    switch(action.type){
        case TABLEDATA:
        return{
            ...state,
            get_tbl_emp:action.payload
        }
    }
    return state
}