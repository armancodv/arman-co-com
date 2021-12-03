import {ProfileState} from "./profile/models_d";
import {ExperienceState} from "./experience/models_d";
import {HighlightsState} from "./highlights/models_d";
import {PortfoliosState} from "./portfolio/models_d";

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
    profile: ProfileState;
    experience: ExperienceState;
    highlights: HighlightsState;
    portfolio: PortfoliosState;
}

export type TagGroup = {
    id: string;
    title: string;
    tags: string[];
}