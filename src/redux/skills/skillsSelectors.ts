import {State} from "../models_d";
import {SkillsState} from "./models_d";
const skillsSelectors = {
    getSkills: (state: State): SkillsState => state?.skills
}

export default skillsSelectors