import {FetchState} from "../models_d";

export type ProfileResponse = {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
}
export type ProfileState = {
    data: ProfileResponse,
    dataState: FetchState
}
