import {Action, FetchState} from "../models_d";
import {SkillsResponse} from "./models_d";
import skillsTypes from "./skillsTypes";
const skillsActions = {
    fetchSkills: (): Action => ({
        type: skillsTypes.FETCH_SKILLS
    }),
    setSkills: (skills: SkillsResponse): Action<SkillsResponse> => ({
        type: skillsTypes.SET_SKILLS,
        payload: skills
    }),
    setSkillsState: (fetchState: FetchState): Action<FetchState> => ({
        type: skillsTypes.SET_SKILLS_STATE,
        payload: fetchState
    })
}

export default skillsActions;