import {all} from 'redux-saga/effects';
import profileSaga from './profile/profileSaga';
import experienceSaga from './experience/experienceSaga';
import highlightsSaga from './highlights/highlightsSaga';
import portfoliosSaga from './portfolio/portfolioSaga';
import generalSaga from './general/generalSaga';

export default function* saga() {
  yield all([
    ...generalSaga,
    ...profileSaga,
    ...experienceSaga,
    ...highlightsSaga,
    ...portfoliosSaga,
  ]);
}
