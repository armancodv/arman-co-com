import {State} from "../models_d";
import {ProfileState} from "./models_d";

const getProfile = (state: State): ProfileState => state?.profile;

export default {
    getProfile
}