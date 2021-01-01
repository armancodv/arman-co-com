import {call, put, takeLatest} from 'redux-saga/effects'
import {Action, FetchState} from "../models_d";
import profileApi from "./profileApi";
import profileActions from "./profileActions";
import profileTypes from "./profileTypes";
import {AxiosResponse} from "axios";
import {ProfileResponse} from "./models_d";

function* fetchProfile(action: Action) {
    try {
        yield put(profileActions.setProfileState(FetchState.LOADING))
        const response: AxiosResponse<ProfileResponse> = yield call(profileApi.getProfile);
        yield put(profileActions.setProfile(response.data))
        yield put(profileActions.setProfileState(FetchState.SUCCESS))
    }catch(e) {
        yield put(profileActions.setProfileState(FetchState.FAIL))
        console.log(e);
    }

}
function* watchFetchProfile() {
    yield takeLatest(profileTypes.FETCH_PROFILE, fetchProfile)
}

const profileSaga = [
    watchFetchProfile()
]
export default profileSaga;