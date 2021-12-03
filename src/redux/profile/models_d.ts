import {FetchState, TagGroup} from '../models_d';
import {IconString} from '../../utils/getFontAwesomeIcon';

export type Social = {
    id: string;
    title: string;
    icon: IconString;
    link: string;
}

export type Publication = {
    id: string;
    title: string;
    journal: string;
    date: string;
    link: string;
}

export type Education = {
    id: string;
    level: string;
    university: string;
    image: string;
    duration: string;
}

export type Footer = {
    pageSource: string;
    github: string;
    googlePlay: string;
    medium: string;
    linkedin: string;
}

export type ProfileResponse = {
    id: string;
    firstName: string;
    lastName: string;
    nickName?: string;
    title: string;
    location?: string;
    yearOfBirth?: number;
    email?: string;
    url?: string;
    description?: string;
    image?: string;
    social?: Social[];
    publications?: Publication[];
    education?: Education[];
    footer?: Footer;
    skills?: TagGroup[];
}
export type ProfileState = {
    data: ProfileResponse;
    dataState: FetchState;
}
