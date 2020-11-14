import { combineReducers } from 'redux'
import profileReducers from "./profile/profileReducers";
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
const reducers = (history: History) => combineReducers({
    router: connectRouter(history),
    profile: profileReducers
});
export default reducers;