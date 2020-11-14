import React from 'react';
import AppContent from "./AppContent";
import {Layout, Menu} from 'antd';

import "antd/dist/antd.css";
import './App.css';

function App() {
    return (
        <Layout className="layout">
            <Layout.Header className="header">
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>
            </Layout.Header>
            <Layout.Content className="content">
                <AppContent/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
