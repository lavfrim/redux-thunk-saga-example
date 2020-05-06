import {
    CREATE_POST,
    FETCH_POSTS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT,
    SET_POSTS,
} from './types';


export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
});

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS,
    }
};

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts,
    };
};

export const showLoader = () => {
    return {
        type: SHOW_LOADER,
    };
};

export const hideLoader = () => {
    return {
        type: HIDE_LOADER,
    };
};

export const showAlert = (message) => {
    return {
        type: SHOW_ALERT,
        payload: message,
    };
};

export const hideAlert = () => {
    return {
        type: HIDE_ALERT,
    };
};
