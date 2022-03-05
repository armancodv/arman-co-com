import { ProfileState } from './models_d';
import { Action, FetchState } from '../models_d';
import profileTypes from './profileTypes';

const initialState: ProfileState = {
  data: {
    id: '',
    firstName: '',
    lastName: '',
    title: '',
  },
  dataState: FetchState.INIT,
};

const profileReducers = (
  state: ProfileState = initialState,
  action: Action
): ProfileState => {
  switch (action.type) {
    case profileTypes.SET_PROFILE:
      return {
        ...state,
        data: action.payload || state.data,
      };
    case profileTypes.SET_PROFILE_STATE:
      return {
        ...state,
        dataState: action.payload || FetchState.INIT,
      };
    default:
      return state;
  }
};

export default profileReducers;
