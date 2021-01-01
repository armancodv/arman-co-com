import { combineReducers } from 'redux'
import profileReducers from "./profile/profileReducers";
import { connectRouter } from 'connected-react-router'
import { History } from 'history';
import skillsReducers from "./skills/skillsReducers";
const reducers = (history: History) => combineReducers({
    router: connectRouter(history),
    profile: profileReducers,
    skills: skillsReducers
});
export default reducers;