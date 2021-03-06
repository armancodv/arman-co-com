import {call, put, takeLatest} from 'redux-saga/effects'
import {FetchState} from "../models_d";
import skillsApi from "./skillsApi";
import skillsActions from "./skillsActions";
import skillsTypes from "./skillsTypes";
import {AxiosResponse} from "axios";
import {SkillsResponse} from "./models_d";

function* fetchSkills() {
    try {
        yield put(skillsActions.setSkillsState(FetchState.LOADING))
        const response: AxiosResponse<SkillsResponse> = yield call(skillsApi.getSkills);
        yield put(skillsActions.setSkills(response.data))
        yield put(skillsActions.setSkillsState(FetchState.SUCCESS))
    }catch(e) {
        yield put(skillsActions.setSkillsState(FetchState.FAIL))
        console.log(e);
    }

}
function* watchFetchSkills() {
    yield takeLatest(skillsTypes.FETCH_SKILLS, fetchSkills)
}

const skillsSaga = [
    watchFetchSkills()
]
export default skillsSaga;