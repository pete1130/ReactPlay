import React, { Component } from 'react';
import RedditListing from './RedditListing';

export default class Reddit extends Component {
    state = {
        posts: {}
    };

    componentDidMount() {
        fetch('http://www.reddit.com/r/reactjs.json')
            .then(res => res.json())
            .then(json => this.processPosts(json.data.children))
            .catch(err => console.log(err));
    }

    processPosts = posts => {
        let postsHash = posts.reduce((hash, post) => {
            hash[post.data.id] = post.data;
            return hash;
        }, {});

        this.setState({
            posts: postsHash
        });
    };

    handleUpvote = postId => {
        this.setState({
            posts: {
                ...this.state.posts,

                [postId]: {
                    ...this.state.posts[postId],
                    score: this.state.posts[postId].score + 1
                }
            }
        });
    };

    handleDownvote = postId => {
        this.setState({
            posts: {
                ...this.state.posts,

                [postId]: {
                    ...this.state.posts[postId],
                    score: this.state.posts[postId].score - 1
                }
            }
        });
    };

    render() {
        const posts = Object.keys(this.state.posts).map(
            id => this.state.posts[id]
        );

        return (
            <RedditListing
                posts={posts}
                onUpvote={this.handleUpvote}
                onDownvote={this.handleDownvote}
            />
        );
    }
}
