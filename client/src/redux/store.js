import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./ducks/posts";

const reducers = combineReducers({
    posts: postsReducer
})

export const store = configureStore({
    reducer: reducers
})