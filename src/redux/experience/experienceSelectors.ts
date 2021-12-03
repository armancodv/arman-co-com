import {State} from '../models_d';
import {Experience} from './models_d';
const experienceSelectors = {
  getExperience: (state: State): Experience[] => state?.experience?.data ?? [],
};

export default experienceSelectors;
