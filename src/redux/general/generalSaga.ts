import {put, takeLatest} from 'redux-saga/effects';
import generalTypes from './generalTypes';
import profileActions from '../profile/profileActions';
import experienceActions from '../experience/experienceActions';
import highlightsActions from '../highlights/highlightsActions';
import portfoliosActions from '../portfolio/portfolioActions';

function* pageLoad() {
  yield put(profileActions.fetchProfile());
  yield put(experienceActions.fetchExperience());
  yield put(highlightsActions.fetchHighlights());
  yield put(portfoliosActions.fetchPortfolios());
}

function* watchPageLoad() {
  yield takeLatest(generalTypes.PAGE_LOAD, pageLoad);
}

const generalSaga = [
  watchPageLoad(),
];
export default generalSaga;
