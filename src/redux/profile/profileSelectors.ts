import {State} from "../models_d";
const profileSelectors = {
    getFullName: (state: State): string => `${state?.profile?.data?.firstName ?? ''} ${state?.profile?.data?.lastName ?? ''}`,
    getNickName: (state: State): string => state?.profile?.data?.nickName ?? '',
    getTitle: (state: State): string => state?.profile?.data?.title ?? '',
    getImage: (state: State): string => state?.profile?.data?.image ?? '',
    getDescription: (state: State): string => state?.profile?.data?.description ?? ''
}

export default profileSelectors