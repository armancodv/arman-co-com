import { all } from "redux-saga/effects";
import profileSaga from "./profile/profileSaga";
import skillsSaga from "./skills/skillsSaga";
import experienceSaga from "./experience/experienceSaga";

export default function* saga() {
    yield all([
        ...profileSaga,
        ...skillsSaga,
        ...experienceSaga,
    ]);
}