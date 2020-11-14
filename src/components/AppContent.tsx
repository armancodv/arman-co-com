import React from 'react';
import {Route, Switch} from "react-router";

function AppContent() {
    return (
        <Switch>
            <Route path="/contact">
                Contact
            </Route>
            <Route path="/">
                Home
            </Route>
        </Switch>
    );
}

export default AppContent;