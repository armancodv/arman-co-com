import {FetchState} from "../models_d";
import {IconString} from "../../utils/getFontAwesomeIcon";

export type Skill = {
    id: string;
    name: string;
    percentage: number;
    icon: IconString;
    hasBadge: boolean;
}
export type SkillsResponse = Skill[]
export type SkillsState = {
    data: SkillsResponse
    dataState: FetchState
}
