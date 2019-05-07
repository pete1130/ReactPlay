import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

function Email({ detail }) {
    let { sender, sub, date, body } = detail;
    return (
        <div className="email">
            <input type="checkbox" />
            <i className="fa fa-thumb-tack pin" />
            <div className="content">
                <div className="line1">
                    <div className="sender">{sender}</div>
                    <div className="subject">{sub}</div>
                    <div className="date">{date}</div>
                </div>
                <div className="message">{body}</div>
            </div>
        </div>
    );
}
Email.propTypes = {
    detail: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        sub: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }).isRequired
};

let details = {
    sender: 'React Newsletter',
    sub: 'React Newsletter - Issue 36',
    date: 'Jul 15',
    body:
        'React Newsletter Issue -36 - July 15th 2016 Read this issue on the web http://react/newsletter.com/issues/36?'
};

ReactDOM.render(<Email detail={details} />, document.getElementById('root'));
