import experienceReducers from './experienceReducers';
import experienceActions from './experienceActions';
import { Experience } from './models_d';
import { FetchState } from '../models_d';

const experience: Experience = {
  id: '1',
  title: 'Title',
  description: 'Description',
  company: {
    id: '2',
    title: 'companyname',
    image: 'image.png',
    link: 'linktocompany',
  },
  location: 'Here',
  duration: '2 years',
};

test('set experience should update state', () => {
  const experienceResponse = [experience];
  const action = experienceActions.setExperience(experienceResponse);
  const state = experienceReducers(undefined, action);
  expect(state.data).toEqual(experienceResponse);
});

test('set experience state should update state', () => {
  const fetchState = FetchState.SUCCESS;
  const action = experienceActions.setExperienceState(fetchState);
  const state = experienceReducers(undefined, action);
  expect(state.dataState).toEqual(fetchState);
});
