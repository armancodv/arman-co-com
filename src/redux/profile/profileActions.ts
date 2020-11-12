import {Action} from "../models_d";
import {ProfileResponse} from "./models_d";
import profileTypes from "./profileTypes";

const fetchProfile = (): Action => ({
    type: profileTypes.FETCH_PROFILE
})

const setProfile = (profile: ProfileResponse): Action<ProfileResponse> => ({
    type: profileTypes.SET_PROFILE,
    payload: profile
})

export default {
    fetchProfile,
    setProfile
}
