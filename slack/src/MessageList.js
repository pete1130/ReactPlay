import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Message from './Message';

export default class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.array
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        let node = ReactDOM.findDOMNode(this);
        node.scrollTop = node.scrollHeight;
    }

    render() {
        const { messages } = this.props;

        <div className="message-list">
            <div className="anchor-messages-bottom">
                {messages.map(message => (
                    <Message key={message.id} message={message} />
                ))}
            </div>
        </div>;
    }
}
