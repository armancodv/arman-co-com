import {FetchState} from "../models_d";

export type Skill = {
    id: string;
    name: string;
    percentage: number;
}
export type SkillsResponse = Skill[]
export type SkillsState = {
    data: SkillsResponse
    dataState: FetchState
}