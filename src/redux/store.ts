import {applyMiddleware, compose, createStore, Store} from "redux";
import reducers from "./reducers";
// @ts-ignore
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({name: 'Armanco'}) : (f) => f;

export default function initStore(): Store {
    return createStore(
        reducers,
        compose(applyMiddleware(), devTools),
    );
};