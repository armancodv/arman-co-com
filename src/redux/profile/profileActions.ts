import {Action} from "../models_d";
import {FETCH_PROFILE} from "./profileTypes";

export const fetchProfile = (): Action => ({
    type: FETCH_PROFILE
})

