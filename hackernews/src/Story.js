import React from 'react';
import PropTypes from 'prop-types';
import Time from './time';

const Story = ({ story }) => (
    <span className="story">
        <h3 className="title">{story.title}</h3>
        <div className="subtext">
            <span className="score">{story.score} points</span>
            {' by '}
            <span className="user">{story.by}</span>{' '}
            <Time time={story.time} isUnixTime={true} />
            {' | '}
            <a href={story.url}>flag</a>
            {' | '}
            <a href={story.url}>hide</a>
            {' | '}
            <a href={story.url}>{story.descendants} comments</a>
        </div>
    </span>
);

Story.propTypes = {
    story: PropTypes.object.isRequired
};

export default Story;
