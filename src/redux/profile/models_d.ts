import {FetchState} from "../models_d";

export type SocialIcon = 'github' | 'linkedin' | 'twitter' | 'medium';
export type Social = {
    id: string;
    title: string;
    icon: SocialIcon;
    link: string;
}

export type ProfileResponse = {
    id: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    title: string;
    location?: string;
    description?: string;
    image?: string;
    social?: Social[];
}
export type ProfileState = {
    data: ProfileResponse;
    dataState: FetchState;
}
