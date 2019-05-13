import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();

    return <td className="time">{timeString}</td>;
};
Time.propType = {
    time: PropTypes.string.isRequired
};

export default Time;
