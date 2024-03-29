import { FetchState, State, TagGroup } from '../models_d';
import { Education, Footer, Publication, Social } from './models_d';

const profileSelectors = {
  getFullName: (state: State): string =>
    `${state?.profile?.data?.firstName ?? ''} ${
      state?.profile?.data?.lastName ?? ''
    }`,
  getNickName: (state: State): string => state?.profile?.data?.nickName ?? '',
  getTitle: (state: State): string => state?.profile?.data?.title ?? '',
  getImage: (state: State): string => state?.profile?.data?.image ?? '',
  getDescription: (state: State): string =>
    state?.profile?.data?.description ?? '',
  getSocial: (state: State): Social[] => state?.profile?.data?.social ?? [],
  getFetchState: (state: State): FetchState =>
    state?.profile?.dataState ?? FetchState.INIT,
  getLocation: (state: State): string => state?.profile?.data?.location ?? '',
  getYearOfBirth: (state: State): number =>
    state?.profile?.data?.yearOfBirth ?? 0,
  getEmail: (state: State): string => state?.profile?.data?.email ?? '',
  getUrl: (state: State): string => state?.profile?.data?.url ?? '',
  getPublications: (state: State): Publication[] =>
    state?.profile?.data?.publications ?? [],
  getEducation: (state: State): Education[] =>
    state?.profile?.data?.education ?? [],
  getFooter: (state: State): Footer | undefined => state?.profile?.data?.footer,
  getSkills: (state: State): TagGroup[] | undefined =>
    state?.profile?.data?.skills,
};

export default profileSelectors;
