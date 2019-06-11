import React from 'react';
import PropTypes from 'prop-types';
import RedditPost from './RedditPost';

const RedditListing = ({ posts, onUpVote, onDownVote }) => (
    <ul className="reddit-listing">
        {posts
            .sort((p1, p2) => p2.score - p1.score)
            .map(post => (
                <li key={post.id}>
                    <RedditPost
                        post={post}
                        onUpVote={onUpVote}
                        onDownVote={onDownVote}
                    />
                </li>
            ))}
    </ul>
);

RedditListing.propTypes = {
    posts: PropTypes.object.isRequired,
    handleDownVote: PropTypes.func.isRequired,
    handleUpVote: PropTypes.func.isRequired
};

export default RedditListing;
