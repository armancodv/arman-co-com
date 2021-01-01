import {State} from "../models_d";
import {ExperienceState} from "./models_d";
const experienceSelectors = {
    getExperience: (state: State): ExperienceState => state?.experience
}

export default experienceSelectors