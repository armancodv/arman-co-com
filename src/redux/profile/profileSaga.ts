import {FETCH_PROFILE} from "./profileTypes";
import {takeLatest} from 'redux-saga/effects'
import {Action} from "../models_d";
function* fetchProfile(action: Action) {
}
function* watchFetchProfile() {
    yield takeLatest(FETCH_PROFILE, fetchProfile)
}
export default [
    watchFetchProfile()
]