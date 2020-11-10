import { all } from "redux-saga/effects";
import profileSaga from "./profile/profileSaga";

export default function* saga() {
    yield all([
        ...profileSaga
    ]);
}