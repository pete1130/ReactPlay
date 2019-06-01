import React from 'react';
import PropTypes from 'prop-types';

function Nav({ activeTab, onTabChange, items }) {
    var itemCount = items.reduce((sum, item) => {
        return sum + item.count;
    }, 0);

    var itemTotal = items.reduce((sum, item) => {
        return sum + item.price * item.count;
    }, 0);

    return (
        <nav className="App-nav">
            <ul>
                <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
                    <NavLink index={0} onClick={onTabChange}>
                        Item
                    </NavLink>
                </li>
                <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
                    <NavLink index={1} onClick={onTabChange}>
                        Cart
                    </NavLink>
                </li>
            </ul>
            <div
                className="App-nav-item App-nav-cart-summary"
                onClick={onTabChange.bind(this, 1)}
            >
                <i className="fa fa-shopping-cart" />
                <span className="summary-item-count">
                    {itemCount}
                    {itemCount === 1 ? ' item' : ' items'}
                </span>

                {items.length > 0 && <span>(${itemTotal.toFixed(2)})</span>}
            </div>
        </nav>
    );
}

class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.index);
    };

    render() {
        return <a onClick={this.handleClick}>{this.props.children}</a>;
    }
}

Nav.propTypes = {
    activeTab: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

export default Nav;
