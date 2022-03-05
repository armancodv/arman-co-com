import { put, takeLatest } from 'redux-saga/effects';
import { FetchState } from '../models_d';
import profileActions from './profileActions';
import profileTypes from './profileTypes';
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from 'firebase/remote-config';

function* fetchProfile() {
  try {
    yield put(profileActions.setProfileState(FetchState.LOADING));
    const remoteConfig = getRemoteConfig();
    yield fetchAndActivate(remoteConfig);
    const response = getValue(remoteConfig, 'profile');
    yield put(profileActions.setProfile(JSON.parse(response.asString())));
    yield put(profileActions.setProfileState(FetchState.SUCCESS));
  } catch (e) {
    yield put(profileActions.setProfileState(FetchState.FAIL));
    console.log(e);
  }
}
function* watchFetchProfile() {
  yield takeLatest(profileTypes.FETCH_PROFILE, fetchProfile);
}

const profileSaga = [watchFetchProfile()];
export default profileSaga;
