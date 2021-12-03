import {FetchState} from '../models_d';
import {IconString} from '../../utils/getFontAwesomeIcon';

export type Portfolio = {
    id: string;
    title: string;
    description: string;
    link: string;
    icon: IconString;
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
