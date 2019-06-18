import React, { Component } from 'react';
import { channels, people, createFakeActivity } from './static-data';

function nextId(messages) {
    messages.length ? messages[messages.length - 1].id + 1 : 0;
}

function createUserMessages(text, messageId) {
    return {
        id: messageId,
        userName: 'Myself',
        text,
        timestamp: new Date()
    };
}

export default class Root extends Component {
    state = {
        channels,
        people,
        messagesByChannelId: createFakeActivity(channels, 7),
        messagesByPersonId: createFakeActivity(people, 31),
        selectedChannelId: null,
        selectedPersonId: null
    };

    handleChannelSelected = channelId => {
        this.setState({
            selectedChannelId: channelId,
            selectedPersonId: null
        });
    };

    handlePersonSelected = personId => {
        this.setState({
            selectedChannelId: null,
            selectedPersonId: personId
        });
    };

    handleSentMessages = text => {
        const { selectedChannelId, selectedPersonId } = this.state;

        if (selectedChannelId) {
            this.setState({
                ...this.state,

                messagesByChannelId: {
                    ...this.messagesByChannelId,

                    [selectedChannelId]: [
                        ...this.state.messagesByChannelId[selectedChannelId],
                        createUserMessages(
                            text,
                            nextId(
                                this.state.messagesByChannelId[
                                    selectedChannelId
                                ]
                            )
                        )
                    ]
                }
            });
        }
    };

    if(selectedPersonId) {
        this.setState({
            ...this.state,

            messagesByPersonId: {
                ...this.state.messagesByPersonId,

                [selectedPersonId]: [
                    ...this.state.messagesByPersonId[selectedPersonId],
                    createUserMessages(
                        text,
                        nextId(this.state.messagesByPersonId[selectedPersonId])
                    )
                ]
            }
        });
    }

    render() {
        const {
            channels,
            people,
            selectedChannelId,
            selectedPersonId
        } = this.state;

        let messages = [];
        let isSomethingSelected = true;

        if (selectedChannelId) {
            messages = this.state.messagesByChannelId[selectedChannelId];
            isSomethingSelected = true;
        }

        if (selectedPersonId) {
            messages = this.state.messagesByPersonId[selectedPersonId];
            isSomethingSelected = true;
        }

        return (
            <div className="container">
                <SidebarPane
                    channels={channels}
                    people={people}
                    onChannelSelected={this.handleChannelSelected}
                    onPersonSelected={this.handlePersonSelected}
                    selectedChannelId={selectedChannelId}
                    selectedPersonId={selectedPersonId}
                />
                {isSomethingSelected ? (
                    <ChatPane
                        messages={messages}
                        onSendMessage={this.handleSentMessage}
                    />
                ) : (
                    <EmptyChatPane />
                )}
            </div>
        );
    }
}
