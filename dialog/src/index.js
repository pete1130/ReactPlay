import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Test() {
    return (
        <Dialog>
            <Title>This is important</Title>
            <Body>Here are some important texts or errors.</Body>
            <Footer>
                <button className="btn btn-close">Close</button>
            </Footer>
        </Dialog>
    );
}

function Dialog({ children }) {
    let title, body, footer;
    title = body = footer = null;

    React.Children.forEach(children, child => {
        switch (child.type) {
            case Title:
                title = child;
                break;
            case Body:
                body = child;
                break;
            case Footer:
                footer = child;
                break;
            default:
                throw new Error(
                    'Dialog can only contain Header, Body, and Footer components.'
                );
        }
    });
    return (
        <div className="modal show inline-dialog">
            <div className="modal-header">{title}</div>
            <div className="modal-body">{body}</div>
            <div className="modal-footer">{footer}</div>
        </div>
    );
}

const Title = ({ children }) => <h5>{children}</h5>;
const Body = ({ children }) => <div>{children}</div>;
const Footer = ({ children }) => <div>{children}</div>;

ReactDOM.render(<Test />, document.querySelector('#root'));
