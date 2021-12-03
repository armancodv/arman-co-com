import {call, put, takeLatest} from 'redux-saga/effects';
import {FetchState} from '../models_d';
import highlightsApi from './highlightsApi';
import highlightsActions from './highlightsActions';
import highlightsTypes from './highlightsTypes';
import {AxiosResponse} from 'axios';
import {HighlightsResponse} from './models_d';

function* fetchHighlights() {
  try {
    yield put(highlightsActions.setHighlightsState(FetchState.LOADING));
    const response: AxiosResponse<HighlightsResponse> =
        yield call(highlightsApi.getHighlights);
    yield put(highlightsActions.setHighlights(response.data));
    yield put(highlightsActions.setHighlightsState(FetchState.SUCCESS));
  } catch (e) {
    yield put(highlightsActions.setHighlightsState(FetchState.FAIL));
    console.log(e);
  }
}
function* watchFetchHighlights() {
  yield takeLatest(highlightsTypes.FETCH_HIGHLIGHTS, fetchHighlights);
}

const highlightsSaga = [
  watchFetchHighlights(),
];
export default highlightsSaga;
