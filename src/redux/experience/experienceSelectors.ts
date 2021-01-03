import {State} from "../models_d";
import {Experience, ExperienceState} from "./models_d";
const experienceSelectors = {
    getExperience: (state: State): Experience[] => state?.experience?.data ?? []
}

export default experienceSelectors