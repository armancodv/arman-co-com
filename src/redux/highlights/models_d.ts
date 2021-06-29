import {FetchState, Link, TagGroup} from "../models_d";

export type Highlight = {
    id: string;
    title: string;
    description: number;
    tagGroups: TagGroup[];
    links: Link[];
}
export type HighlightsResponse = Highlight[]
export type HighlightsState = {
    data: HighlightsResponse
    dataState: FetchState
}
