import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Post from '../Post';

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
});

const Posts = (props) => {
    const { posts } = props;

    return (
        <div className="d-flex flex-column justify-content-center">
            <h1 className="text-center">SYNC POSTS</h1>
            {posts.length > 0
                ? posts.map(post => <Post key={post.id} post={post} />)
                : <h5>No one post</h5>}
        </div>
    )
};

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    })).isRequired,
}

export default connect(mapStateToProps, null)(Posts);