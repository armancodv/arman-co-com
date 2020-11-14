import {call, put, takeLatest} from 'redux-saga/effects'
import {Action} from "../models_d";
import profileApi from "./profileApi";
import profileActions from "./profileActions";
import profileTypes from "./profileTypes";
import {ProfileResponse} from "./models_d";
function* fetchProfile(action: Action) {
    try {
        const data: ProfileResponse = yield call(profileApi.getProfile);
        yield put(profileActions.setProfile(data))
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