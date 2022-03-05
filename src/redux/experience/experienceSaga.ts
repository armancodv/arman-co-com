import { put, takeLatest } from 'redux-saga/effects';
import { FetchState } from '../models_d';
import experienceActions from './experienceActions';
import experienceTypes from './experienceTypes';
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from 'firebase/remote-config';

function* fetchExperience() {
  try {
    yield put(experienceActions.setExperienceState(FetchState.LOADING));
    const remoteConfig = getRemoteConfig();
    yield fetchAndActivate(remoteConfig);
    const response = getValue(remoteConfig, 'experience');
    yield put(experienceActions.setExperience(JSON.parse(response.asString())));
    yield put(experienceActions.setExperienceState(FetchState.SUCCESS));
  } catch (e) {
    yield put(experienceActions.setExperienceState(FetchState.FAIL));
  }
}
function* watchFetchExperience() {
  yield takeLatest(experienceTypes.FETCH_EXPERIENCE, fetchExperience);
}

const experienceSaga = [watchFetchExperience()];
export default experienceSaga;
