import {ProfileState} from "./profile/models_d";
import {SkillsState} from "./skills/models_d";
import {ExperienceState} from "./experience/models_d";
import {RouterState} from "connected-react-router";

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
    skills: SkillsState;
    experience: ExperienceState;
}