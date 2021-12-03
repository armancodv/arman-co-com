import {ExperienceState} from './models_d';
import {Action, FetchState} from '../models_d';
import experienceTypes from './experienceTypes';

const initialState: ExperienceState = {
  data: [],
  dataState: FetchState.INIT,
};

const experienceReducers = (
    state: ExperienceState = initialState,
    action: Action,
): ExperienceState => {
  switch (action.type) {
    case experienceTypes.SET_EXPERIENCE:
      return {
        ...state,
        data: action.payload || state.data,
      };
    case experienceTypes.SET_EXPERIENCE_STATE:
      return {
        ...state,
        dataState: action.payload || FetchState.INIT,
      };
    default:
      return state;
  }
};

export default experienceReducers;
