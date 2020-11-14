import React from 'react';
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";

const AppHeader: React.FunctionComponent = () => {
    return (
        <Layout.Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="contact"><Link to="/contact">Contact</Link></Menu.Item>
            </Menu>
        </Layout.Header>
    );
}

export default AppHeader;