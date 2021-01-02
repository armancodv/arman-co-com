import {FetchState} from "../models_d";

export type ProfileResponse = {
    id: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    title: string;
    location?: string;
    description?: string;
    image?: string;
}
export type ProfileState = {
    data: ProfileResponse,
    dataState: FetchState
}
