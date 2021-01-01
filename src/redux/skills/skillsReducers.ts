import {SkillsState} from './models_d';
import {Action} from "../models_d";
import skillsTypes from "./skillsTypes";

const initialState: SkillsState = {
    data: []
}

const skillsReducers = (state: SkillsState = initialState, action: Action): SkillsState => {
    switch (action.type) {
        case skillsTypes.SET_SKILLS:
            return {
                ...state,
                data: action.payload || state.data
            }
        default:
            return state;
    }
}

export default skillsReducers;