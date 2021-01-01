import {SkillsState} from './models_d';
import {Action, FetchState} from "../models_d";
import skillsTypes from "./skillsTypes";

const initialState: SkillsState = {
    data: [],
    dataState: FetchState.INIT
}

const skillsReducers = (state: SkillsState = initialState, action: Action): SkillsState => {
    switch (action.type) {
        case skillsTypes.SET_SKILLS:
            return {
                ...state,
                data: action.payload || state.data
            }
        case skillsTypes.SET_SKILLS_STATE:
            return {
                ...state,
                dataState: action.payload || FetchState.INIT
            }
        default:
            return state;
    }
}

export default skillsReducers;