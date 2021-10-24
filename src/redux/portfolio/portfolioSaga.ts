import {call, put, takeLatest} from 'redux-saga/effects'
import {FetchState} from "../models_d";
import {AxiosResponse} from "axios";
import {PortfoliosResponse} from "./models_d";
import portfoliosActions from "./portfolioActions";
import portfoliosTypes from "./portfolioTypes";
import portfoliosApi from "./portfolioApi";

function* fetchPortfolios() {
    try {
        yield put(portfoliosActions.setPortfoliosState(FetchState.LOADING))
        const response: AxiosResponse<PortfoliosResponse> = yield call(portfoliosApi.getPortfolios);
        yield put(portfoliosActions.setPortfolios(response.data))
        yield put(portfoliosActions.setPortfoliosState(FetchState.SUCCESS))
    }catch(e) {
        yield put(portfoliosActions.setPortfoliosState(FetchState.FAIL))
        console.log(e);
    }

}
function* watchFetchPortfolios() {
    yield takeLatest(portfoliosTypes.FETCH_PORTFOLIOS, fetchPortfolios)
}

const portfoliosSaga = [
    watchFetchPortfolios()
]
export default portfoliosSaga;