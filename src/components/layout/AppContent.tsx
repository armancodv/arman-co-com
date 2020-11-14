import React from 'react';
import {Route, Switch} from "react-router";
import {Layout} from "antd";

const AppContent: React.FunctionComponent = () => {
    return (
        <Layout.Content className="content">
            <Switch>
                <Route path="/contact">
                    Contact
                </Route>
                <Route path="/">
                    Home
                </Route>
            </Switch>
        </Layout.Content>
    );
}

export default AppContent;