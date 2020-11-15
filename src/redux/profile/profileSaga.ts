import {call, put, takeLatest} from 'redux-saga/effects'
import {Action} from "../models_d";
import profileApi from "./profileApi";
import profileActions from "./profileActions";
import profileTypes from "./profileTypes";
import {AxiosResponse} from "axios";
import {ProfileResponse} from "./models_d";
function* fetchProfile(action: Action) {
    try {
        const response: AxiosResponse<ProfileResponse> = yield call(profileApi.getProfile);
        yield put(profileActions.setProfile(response.data))
    }catch(e) {
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