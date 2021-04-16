import axios from "axios"
import { createPost, deletePost, getPosts } from "../redux/ducks/posts";

export const startGetPosts = () => {
    return async (dispatch) => {
        try {
            const { data: { posts } } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts`);
            dispatch(getPosts({ posts }))
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const startDeletePost = (postID) => {
    return async (dispatch) => {
        try {
            const { data: { message } } = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/posts/${[postID]}`);
            console.log(message);
            dispatch(deletePost({ postID }))
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const startAddPost = (post) => {
    return async (dispatch) => {
        try {
            console.log(post);
            const { data: { message, postCreated } } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts`, { ...post });
            console.log(message);
            dispatch(createPost({ post: postCreated }))
        } catch (error) {
            console.log(error);
        }
    }
}