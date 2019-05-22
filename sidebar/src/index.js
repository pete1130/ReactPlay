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
                <Content
                    sidebar={showSidebar}
                    switchSidebar={this.toggleSidebar}
                >
                    Hey I'm the information on the content!
                </Content>

                {showSidebar && (
                    <Sidebar hideSidebar={this.toggleSidebar}>
                        Sidebar info for the win!
                    </Sidebar>
                )}
            </div>
        );
    }
}

const Content = ({ children, sidebar, switchSidebar }) => (
    <div className="content">
        {children}
        {!sidebar && <button onClick={switchSidebar}>Show</button>}
    </div>
);

const Sidebar = ({ children, hideSidebar }) => (
    <div className="sidebar">
        {children}
        <button onClick={hideSidebar}>Hide</button>
    </div>
);

ReactDOM.render(<Layout />, document.getElementById('root'));
