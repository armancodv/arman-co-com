import {Action, FetchState} from '../models_d';
import {ExperienceResponse} from './models_d';
import experienceTypes from './experienceTypes';
const experienceActions = {
  fetchExperience: (): Action => ({
    type: experienceTypes.FETCH_EXPERIENCE,
  }),
  setExperience: (experience: ExperienceResponse):
      Action<ExperienceResponse> => ({
    type: experienceTypes.SET_EXPERIENCE,
    payload: experience,
  }),
  setExperienceState: (fetchState: FetchState): Action<FetchState> => ({
    type: experienceTypes.SET_EXPERIENCE_STATE,
    payload: fetchState,
  }),
};

export default experienceActions;
