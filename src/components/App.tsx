import React from 'react';
import {Layout} from 'antd';

import "antd/dist/antd.css";
import './App.css';
import AppHeader from "./layout/AppHeader";
import AppContent from "./layout/AppContent";

const App: React.FunctionComponent = () => {
    return (
        <Layout className="app">
            <AppHeader />
            <AppContent />
        </Layout>
    );
}

export default App;
