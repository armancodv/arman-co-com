import {State} from "../models_d";
import {Skill} from "./models_d";
const skillsSelectors = {
    getSkills: (state: State): Skill[] => state?.skills?.data ?? []
}

export default skillsSelectors