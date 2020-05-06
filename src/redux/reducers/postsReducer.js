import {
    CREATE_POST,
    SET_POSTS,
} from '../types';

const initialState = {
    posts: [{ id: 1, title: 'one'}, { id: 2, title: 'two'}],
    fetchedPosts: [],
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_POST:
            return {...state, posts: [...state.posts, action.payload] };
        case SET_POSTS:
            return {...state, fetchedPosts: action.payload };
        default: return state;
    }
};