import {HighlightsState} from './models_d';
import {Action, FetchState} from '../models_d';
import highlightsTypes from './highlightsTypes';

const initialState: HighlightsState = {
  data: [],
  dataState: FetchState.INIT,
};

const highlightsReducers = (
    state: HighlightsState = initialState,
    action: Action,
): HighlightsState => {
  switch (action.type) {
    case highlightsTypes.SET_HIGHLIGHTS:
      return {
        ...state,
        data: action.payload || state.data,
      };
    case highlightsTypes.SET_HIGHLIGHTS_STATE:
      return {
        ...state,
        dataState: action.payload || FetchState.INIT,
      };
    default:
      return state;
  }
};

export default highlightsReducers;
