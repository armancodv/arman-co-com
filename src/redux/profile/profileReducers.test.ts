import {ProfileResponse} from './models_d';
import {FetchState} from '../models_d';
import profileActions from './profileActions';
import profileReducers from './profileReducers';

const profile: ProfileResponse = {
  id: '1',
  firstName: 'Title',
  lastName: 'Description',
  title: 'dev',
};

test('set profile should update state', () => {
  const action = profileActions.setProfile(profile);
  const state = profileReducers(undefined, action);
  expect(state.data).toEqual(profile);
});

test('set profile state should update state', () => {
  const fetchState = FetchState.SUCCESS;
  const action = profileActions.setProfileState(fetchState);
  const state = profileReducers(undefined, action);
  expect(state.dataState).toEqual(fetchState);
});
