import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = "delete_post";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=PAPERCLIP1234";   

export function fetchPosts(){

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    // console.log(request);
    return {
        type : FETCH_POSTS,
        payload : request
    }
}

export function createPosts(values,callback) {
    // console.log(values)
    const response = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
    .then(() => callback());
    return {
        type : CREATE_POSTS,
        payload : response
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    // console.log(request)
    return {
        type : FETCH_POST,
        payload : request
    }
}
export function deletePost(id,callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(()=> callback());
    // console.log(request)
    return {
        type : DELETE_POST,
        payload : request
    }
}


// here we are not using export default as only one export default can be used in a class