import { createAction, createReducer } from "@reduxjs/toolkit";

const CREATEPOST = ['[Posts] create post'];
const GETPOSTS = ['[Posts] get all posts'];
const DELETEPOST = ['[Posts] delete post'];
const FILTERPOSTS = ['[Posts] filter post'];

export const createPost = createAction(CREATEPOST);
export const getPosts = createAction(GETPOSTS);
export const deletePost = createAction(DELETEPOST);
export const filterPosts = createAction(FILTERPOSTS);

const initalState = {
    posts: [],
    postsClean: []
};

export const postsReducer = createReducer(initalState, (builder) => {
    builder.addCase(createPost, (state, action) => ({
        ...state,
        posts: [action.payload.post, ...state.posts],
        postsClean: [action.payload.post, ...state.posts]
    }))
    builder.addCase(getPosts, (state, action) => ({
        ...state,
        posts: [...action.payload.posts],
        postsClean: [...action.payload.posts],
    }))
    builder.addCase(deletePost, (state, action) => ({
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.postID && post),
        postsClean: state.posts.filter(post => post.id !== action.payload.postID && post)
    }))
    builder.addCase(filterPosts, (state, action) => ({
        ...state,
        posts: (action.payload.regex === '') ? [...state.postsClean] : state.posts.filter(post => post.name.toLowerCase().trim().includes(action.payload.regex))
    }))
})