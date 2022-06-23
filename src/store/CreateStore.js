import { combineReducers, legacy_createStore } from "redux";
import { initialState } from "../pages/initialState/InitialState";
import {  Reducer1 } from "../reducers/Reducer1";
import { registerReducer } from "../reducers/registerReducer";

const rootRducer = combineReducers({
    Reducer1,
    registerReducer
})

export const store = legacy_createStore(rootRducer)
// console.log(store)