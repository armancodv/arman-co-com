import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import reducers from "./reducers";
import saga from "./saga";
export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware];
const store: Store = createStore(reducers(history), composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(saga);
export default store;