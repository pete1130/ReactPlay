import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Layout extends React.Component {
    state = {
        showSidebar: false
    };

    toggleSidebar = () => {
        this.setState({
            showSidebar: !this.state.showSidebar
        });
    };

    render() {
        const { showSidebar } = this.state;

        return (
            <div className="layout">
                {showSidebar && (
                    <Sidebar onHide={this.toggleSidebar}>
                        Some type of sidebar content
                    </Sidebar>
                )}
                <Content
                    isSidebarVisible={showSidebar}
                    onShowSidebar={this.toggleSidebar}
                >
                    Some content from Content here
                </Content>
            </div>
        );
    }
}

const Content = ({ children, isSidebarVisible, onShowSidebar }) => (
    <div className="content">
        {children}
        {!isSidebarVisible && <button onClick={onShowSidebar}>Show</button>}
    </div>
);

const Sidebar = ({ onHide, children }) => (
    <div className="sidebar">
        {children}
        <button onClick={onHide}>Hide</button>
    </div>
);

ReactDOM.render(<Layout />, document.getElementById('root'));
