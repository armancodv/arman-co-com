import {all} from 'redux-saga/effects';
import profileSaga from './profile/profileSaga';
import experienceSaga from './experience/experienceSaga';
import highlightsSaga from './highlights/highlightsSaga';
import portfoliosSaga from './portfolio/portfolioSaga';

export default function* saga() {
  yield all([
    ...profileSaga,
    ...experienceSaga,
    ...highlightsSaga,
    ...portfoliosSaga,
  ]);
}
