import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store: Store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
// sagaMiddleware.run(sagas);
export default store;