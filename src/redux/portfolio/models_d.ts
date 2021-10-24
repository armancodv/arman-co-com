import {FetchState} from "../models_d";

export type Portfolio = {
    id: string;
    title: string;
    description: string;
    link: string;
    tags: string[];
}

export type PortfolioSection = {
    id: string;
    title: string;
    description: string;
    portfolio: Portfolio[];
}
export type PortfoliosResponse = PortfolioSection[]
export type PortfoliosState = {
    data: PortfoliosResponse
    dataState: FetchState
}
