import { all } from "redux-saga/effects";
import profileSaga from "./profile/profileSaga";
import skillsSaga from "./skills/skillsSaga";

export default function* saga() {
    yield all([
        ...profileSaga,
        ...skillsSaga
    ]);
}