import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./usersSlice";

const rootReducer = combineReducers({
    users:userReducer
})

export const store = configureStore({
    reducer: rootReducer,
})