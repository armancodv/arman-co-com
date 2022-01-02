import {put, takeLatest} from 'redux-saga/effects';
import {FetchState} from '../models_d';
import portfoliosActions from './portfolioActions';
import portfoliosTypes from './portfolioTypes';
import {
  fetchAndActivate,
  getRemoteConfig,
  getValue,
} from 'firebase/remote-config';

function* fetchPortfolios() {
  try {
    yield put(portfoliosActions.setPortfoliosState(FetchState.LOADING));
    const remoteConfig = getRemoteConfig();
    yield fetchAndActivate(remoteConfig);
    const response = getValue(remoteConfig, 'portfolio');
    yield put(portfoliosActions.setPortfolios(JSON.parse(response.asString())));
    yield put(portfoliosActions.setPortfoliosState(FetchState.SUCCESS));
  } catch (e) {
    yield put(portfoliosActions.setPortfoliosState(FetchState.FAIL));
    console.log(e);
  }
}
function* watchFetchPortfolios() {
  yield takeLatest(portfoliosTypes.FETCH_PORTFOLIOS, fetchPortfolios);
}

const portfoliosSaga = [
  watchFetchPortfolios(),
];
export default portfoliosSaga;
