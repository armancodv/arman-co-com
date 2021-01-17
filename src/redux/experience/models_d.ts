import {FetchState} from "../models_d";
export type Company = {
    id: string;
    title: string;
    image: string;
    link: string;
}
export type Experience = {
    id: string;
    title: string;
    description: string;
    company: Company;
    location: string;
    duration: string;
}
export type ExperienceResponse = Experience[]
export type ExperienceState = {
    data: ExperienceResponse
    dataState: FetchState
}
