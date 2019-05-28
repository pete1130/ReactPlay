import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class ItemList extends React.PureComponent {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        );
    }
}

class App extends React.Component {
    state = {
        items: []
    };

    nextItemId = 0;

    makeItem() {
        return {
            id: this.nextItemId++,
            value: Math.random()
        };
    }

    addItemImmutably = () => {
        this.setState({
            items: [...this.state.items, this.makeItem()]
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.addItemImmutably}>
                    Add item immutably
                </button>
                <ItemList items={this.state.items} />
            </div>
        );
    }
}
export default App;
