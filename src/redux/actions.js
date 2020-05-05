import { fetchPostURL } from '../constants/url';
import {
    FETCH_ERROR,
    UNKNOWN_ERROR,
} from '../constants/alert-message';
import {
    CREATE_POST,
    FETCH_POSTS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT,
    HIDE_ALERT,
} from './types';


export const createPost = (post) => ({
    type: CREATE_POST,
    payload: post
});

export const fetchPosts = () => {
    return async dispatch => {
        try {
            dispatch(showLoader());
            const response = await fetch(fetchPostURL);
            const json = await response.json();
            // synthetic slow response
            setTimeout(() => {
                dispatch({
                    type: FETCH_POSTS,
                    payload: json,
                });
                dispatch(hideLoader());
            }, 2000);
        } catch (error) {
            const errorMessage = error.message
                || JSON.stringify(error)
                || UNKNOWN_ERROR;
            dispatch(showAlert(`>>${errorMessage}<<  ${FETCH_ERROR}`));
            setTimeout(() => {
                dispatch(hideAlert());
                dispatch(fetchPosts());
            }, 5000);
        }
    }
};

export const showLoader = () => {
    return {
        type: SHOW_LOADER,
    }
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER,
    }
}

export const showAlert = (message) => {
    return {
        type: SHOW_ALERT,
        payload: message,
    }
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT,
    }
}
