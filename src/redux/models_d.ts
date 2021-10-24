import {ProfileState} from "./profile/models_d";
import {ExperienceState} from "./experience/models_d";
import {RouterState} from "connected-react-router";
import {HighlightsState} from "./highlights/models_d";

export type Action<P = any> = {
    type: string;
    payload?: P;
}

export enum FetchState {
    INIT = 'INIT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL'
}

export type State = {
    router: RouterState;
    profile: ProfileState;
    experience: ExperienceState;
    highlights: HighlightsState;
}

export type TagGroup = {
    id: string;
    title: string;
    tags: string[];
}