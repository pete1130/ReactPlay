import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class RefInput extends React.Component {
    showValue = () => {
        alert(
            `Hey I think I got this. You entered ${
                this.input.value
            } as the input.`
        );
    };

    render() {
        return (
            <div>
                <input type="text" ref={input => (this.input = input)} />
                <button onClick={this.showValue}>Click me!</button>
            </div>
        );
    }
}

ReactDOM.render(<RefInput />, document.getElementById('root'));
