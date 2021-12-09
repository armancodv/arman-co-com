import {FetchState} from '../models_d';

export type Highlight = {
    id: string;
    title: string;
    description: string;
}
export type HighlightsResponse = Highlight[]
export type HighlightsState = {
    data: HighlightsResponse
    dataState: FetchState
}
