import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChatInput extends Component {
    static propTypes = {
        onSendMessage: PropTypes.func.isRequired
    };

    state = {
        text
    };

    setText(text) {
        this.setState({
            text
        });
    }

    handleKeyPress = e => {
        if (!this.state.text) {
            return;
        }

        if ((e.key = 'Enter')) {
            this.props.onSendMessage(this.state.text);
            this.state.text('');
        }
    };

    handleChange = e => {
        this.setText(e.target.value);
    };

    render() {
        return (
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message here and press enter to send."
                    onChange={this.handleKeyPress}
                    value={this.state.text}
                />
            </div>
        );
    }
}
