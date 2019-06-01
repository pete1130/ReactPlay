import React from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import { items } from './static-data';
import CartPage from './CartPage';

class App extends React.Component {
    state = {
        activeTab: 0,
        cart: []
    };

    handleTabChange = index => {
        this.setState({
            activeTab: index
        });
    };

    handleAddToCart = item => {
        this.setState({
            cart: [...this.state.cart, item.id]
        });
    };

    handleRemove = item => {
        let index = this.state.cart.indexOf(item.id);

        this.setState({
            cart: [
                ...this.state.cart.slice(0, index),
                ...this.state.cart.slice(index + 1)
            ]
        });
    };

    computeCartItems() {
        let countItems = this.state.cart.reduce((countItems, itemId) => {
            countItems[itemId] = countItems[itemId] || 0;
            countItems[itemId]++;
            return countItems;
        }, {});

        return Object.keys(countItems).map(itemId => {
            let item = items.find(item => item.id === parseInt(itemId, 10));

            return {
                ...item,
                count: countItems[itemId]
            };
        });
    }

    renderCart() {
        return (
            <CartPage
                items={this.computeCartItems()}
                onAddOne={this.handleAddToCart}
                onRemoveOne={this.handleRemove}
            />
        );
    }

    renderChosenTab() {
        switch (this.state.activeTab) {
            default:
            case 0:
                return (
                    <ItemPage
                        items={items}
                        onAddToCart={this.handleAddToCart}
                    />
                );
            case 1:
                return this.renderCart();
        }
    }

    render() {
        let { activeTab } = this.state;
        return (
            <div className="App">
                <Nav
                    onTabChange={this.handleTabChange}
                    activeTab={activeTab}
                    items={this.computeCartItems()}
                />
                <main className="App-content">{this.renderChosenTab()}</main>
            </div>
        );
    }
}

export default App;
