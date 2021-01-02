import {State} from "../models_d";
import {ProfileState} from "./models_d";
const profileSelectors = {
    getProfile: (state: State): ProfileState => state?.profile,
    getFullName: (state: State): string => `${state?.profile?.data?.firstName ?? ''} ${state?.profile?.data?.lastName ?? ''}`,
    getNickName: (state: State): string => state?.profile?.data?.nickName ?? '',
    getTitle: (state: State): string => state?.profile?.data?.title ?? '',
    getImage: (state: State): string => state?.profile?.data?.image ?? ''
}

export default profileSelectors