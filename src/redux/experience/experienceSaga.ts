import {call, put, takeLatest} from 'redux-saga/effects'
import {FetchState} from "../models_d";
import experienceApi from "./experienceApi";
import experienceActions from "./experienceActions";
import experienceTypes from "./experienceTypes";
import {AxiosResponse} from "axios";
import {ExperienceResponse} from "./models_d";

function* fetchExperience() {
    try {
        yield put(experienceActions.setExperienceState(FetchState.LOADING))
        const response: AxiosResponse<ExperienceResponse> = yield call(experienceApi.getExperience);
        yield put(experienceActions.setExperience(response.data))
        yield put(experienceActions.setExperienceState(FetchState.SUCCESS))
    }catch(e) {
        yield put(experienceActions.setExperienceState(FetchState.FAIL))
        console.log(e);
    }

}
function* watchFetchExperience() {
    yield takeLatest(experienceTypes.FETCH_EXPERIENCE, fetchExperience)
}

const experienceSaga = [
    watchFetchExperience()
]
export default experienceSaga;