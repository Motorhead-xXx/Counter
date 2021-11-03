import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState} from "../utils/localstorage-utils";

export type rootReducerType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store

const rootReducer = combineReducers({
    counter: counterReducer,
})



export const store = createStore(rootReducer,loadState())


