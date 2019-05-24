import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ErrorCatcher extends React.Component { state = { error: null }
componentDidCatch(error, info) { console.log('[componentDidCatch]', error); this.setState({ error: info.componentStack });
}
render() { if(this.state.error) {
return ( <div>
An error occurred: {this.state.error} </div>
) }


ReactDOM.render(<ErrorCatcher />, document.getElementById('root'));

