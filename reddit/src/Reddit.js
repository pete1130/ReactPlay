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
}
