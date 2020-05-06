import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Post from '../Post';
import { fetchPosts } from '../../redux/actions';
import Loading from '../Loading/loading';


const FetchedPost = () => {
    const {
        posts,
        isLoading,
    } = useSelector(state => ({
        posts: state.posts.fetchedPosts,
        isLoading: state.app.isLoading,
    }));
    const dispatch = useDispatch();

    if (posts.length > 0) {
        return (
            <div className="d-flex flex-column justify-content-center">
                <h1 className="text-center">ASYNC POSTS</h1>
                {posts.map(post => <Post key={post.id} post={post} />)}
            </div>
        );
    } else {
        return (
            <div className="d-flex flex-column justify-content-center">
                <h1 className="text-center">ASYNC POSTS</h1>
                {isLoading
                ? <div className="d-flex justify-content-center w-100 mt-4">
                    <Loading />
                  </div>
                : <button
                    className="btn btn-primary mt-4"
                    onClick={() => dispatch(fetchPosts())}
                >
                    Fetch posts
                </button>}
            </div>
        );
    }
};


export default FetchedPost;