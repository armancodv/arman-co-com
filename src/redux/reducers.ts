import { combineReducers } from 'redux'
import profileReducers from "./profile/profileReducers";
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
import experienceReducers from "./experience/experienceReducers";
import highlightsReducers from "./highlights/highlightsReducers";
const reducers = (history: History) => combineReducers({
    router: connectRouter(history),
    profile: profileReducers,
    experience: experienceReducers,
    highlights: highlightsReducers
});
export default reducers;