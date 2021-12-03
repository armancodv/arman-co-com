import {Action, FetchState} from '../models_d';
import {ProfileResponse} from './models_d';
import profileTypes from './profileTypes';
const profileActions = {
  fetchProfile: (): Action => ({
    type: profileTypes.FETCH_PROFILE,
  }),
  setProfile: (profile: ProfileResponse): Action<ProfileResponse> => ({
    type: profileTypes.SET_PROFILE,
    payload: profile,
  }),
  setProfileState: (fetchState: FetchState): Action<FetchState> => ({
    type: profileTypes.SET_PROFILE_STATE,
    payload: fetchState,
  }),
};

export default profileActions;
