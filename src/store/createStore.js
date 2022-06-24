import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {  reducer1 } from "../reducers/reducer1";
import { registerReducer } from "../reducers/registerReducer";
import { loginReducer } from "../reducers/loginReducer";
import { getTableReducer } from "../reducers/getTableReducer";

const rootRducer = combineReducers({
    reducer1,
    registerReducer,
    loginReducer,
    getTableReducer
})

export const store = legacy_createStore(rootRducer,applyMiddleware(thunk))
// console.log(store)