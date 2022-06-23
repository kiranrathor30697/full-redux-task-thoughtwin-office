import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {  reducer1 } from "../reducers/reducer1";
import { registerReducer } from "../reducers/registerReducer";

const rootRducer = combineReducers({
    reducer1,
    registerReducer
})

export const store = legacy_createStore(rootRducer,applyMiddleware(thunk))
// console.log(store)