import { Highlight } from './models_d';
import { FetchState } from '../models_d';
import highlightsActions from './highlightsActions';
import highlightsReducers from './highlightsReducers';

const highlight: Highlight = {
  id: '1',
  title: 'Title',
  description: 'Description',
};

test('set highlights should update state', () => {
  const highlights = [highlight];
  const action = highlightsActions.setHighlights(highlights);
  const state = highlightsReducers(undefined, action);
  expect(state.data).toEqual(highlights);
});

test('set highlights state should update state', () => {
  const fetchState = FetchState.SUCCESS;
  const action = highlightsActions.setHighlightsState(fetchState);
  const state = highlightsReducers(undefined, action);
  expect(state.dataState).toEqual(fetchState);
});
