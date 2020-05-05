import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
    const { post: { title } } = props;

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
    }).isRequired,
}

export default Post;