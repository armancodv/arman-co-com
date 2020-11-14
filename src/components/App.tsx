import React from 'react';
import './App.css';
import {Route, Switch} from "react-router";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from "../redux/store";

function App() {
    return (
        <ConnectedRouter history={history}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/contact">
                            Contact
                        </Route>
                        <Route path="/">
                            Home
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ConnectedRouter>
    );
}

export default App;
