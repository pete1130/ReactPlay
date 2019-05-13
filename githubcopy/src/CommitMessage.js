import React from 'react';
import PropTypes from 'prop-types';

const CommitMessage = ({ file }) => (
    <span className="commit-message">{file.message}</span>
);
CommitMessage.propTypes = {
    file: PropTypes.object.isRequired
};

export default CommitMessage;
