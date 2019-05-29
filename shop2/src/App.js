import React from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './Items';
import { items } from './static-data';

class App extends React.Component {
    state = {
        activeTab: 0
    };

    handleTabChange = index => {
        this.setState({
            activeTab: index
        });
    };

    renderChosenTab() {
        switch (this.state.tab) {
            default:
            case 0:
                return <ItemPage items={items} />;
            case 1:
                return <span>Cart</span>;
        }
    }

    render() {
        let { activeTab } = this.state;
        return (
            <div className="App">
                <Nav onTabChange={this.handleTabChange} activeTab={activeTab} />
                <main className="App-content">{this.renderChosenTab()}</main>
            </div>
        );
    }
}

export default App;
