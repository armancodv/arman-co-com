import { put, takeLatest } from 'redux-saga/effects';
import { FetchState } from '../models_d';
import highlightsActions from './highlightsActions';
import highlightsTypes from './highlightsTypes';
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from 'firebase/remote-config';

function* fetchHighlights() {
  try {
    yield put(highlightsActions.setHighlightsState(FetchState.LOADING));
    const remoteConfig = getRemoteConfig();
    yield fetchAndActivate(remoteConfig);
    const response = getValue(remoteConfig, 'highlights');
    yield put(highlightsActions.setHighlights(JSON.parse(response.asString())));
    yield put(highlightsActions.setHighlightsState(FetchState.SUCCESS));
  } catch (e) {
    yield put(highlightsActions.setHighlightsState(FetchState.FAIL));
    console.log(e);
  }
}
function* watchFetchHighlights() {
  yield takeLatest(highlightsTypes.FETCH_HIGHLIGHTS, fetchHighlights);
}

const highlightsSaga = [watchFetchHighlights()];
export default highlightsSaga;
