import {FetchState, State} from "../models_d";
import {Social} from "./models_d";

const profileSelectors = {
    getFullName: (state: State): string => `${state?.profile?.data?.firstName ?? ''} ${state?.profile?.data?.lastName ?? ''}`,
    getNickName: (state: State): string => state?.profile?.data?.nickName ?? '',
    getTitle: (state: State): string => state?.profile?.data?.title ?? '',
    getImage: (state: State): string => state?.profile?.data?.image ?? '',
    getDescription: (state: State): string => state?.profile?.data?.description ?? '',
    getSocial: (state: State): Social[] => state?.profile?.data?.social ?? [],
    getFetchState: (state: State): FetchState => state?.profile?.dataState ?? FetchState.INIT,
    getLocation: (state: State): string => state?.profile?.data?.location ?? '',
    getYearOfBirth: (state: State): number => state?.profile?.data?.yearOfBirth ?? 0,
    getEmail: (state: State): string => state?.profile?.data?.email ?? '',
    getUrl: (state: State): string => state?.profile?.data?.url ?? '',
}

export default profileSelectors