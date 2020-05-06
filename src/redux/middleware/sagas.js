import { takeEvery, put, call } from 'redux-saga/effects';

import { FETCH_POSTS } from '../types';
import {
    showLoader,
    setPosts,
    hideLoader,
    showAlert,
    hideAlert,
    fetchPosts
} from '../actions';
import { fetchPostURL } from '../../constants/url';
import {
    FETCH_ERROR,
    UNKNOWN_ERROR,
} from '../../constants/alert-message';


export function * sagaWatcher() {
    yield takeEvery(FETCH_POSTS, sagaWorker);
}

export function * sagaWorker() {
    try {
        yield put(hideAlert());
        yield put(showLoader());
        const payload = yield call(fetchPost);
        yield put(setPosts(payload));
        yield put(hideLoader());
    } catch (error) {
        const errorMessage = yield error.message
            || JSON.stringify(error)
            || UNKNOWN_ERROR;
        yield put(showAlert(`>>${errorMessage}<<  ${FETCH_ERROR}`));
        yield new Promise(res => setTimeout(() => res(), 5000));
        yield put(fetchPosts());
    }
}

export function * sagaWorkerWWWW() {
   yield console.log('sagaWorkerWWWW');
}

export async function fetchPost() {
    const response = await fetch(fetchPostURL);
    return await response.json();
}