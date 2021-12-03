import {Action, FetchState} from '../models_d';
import {HighlightsResponse} from './models_d';
import highlightsTypes from './highlightsTypes';
const highlightsActions = {
  fetchHighlights: (): Action => ({
    type: highlightsTypes.FETCH_HIGHLIGHTS,
  }),
  setHighlights: (highlights: HighlightsResponse):
      Action<HighlightsResponse> => ({
    type: highlightsTypes.SET_HIGHLIGHTS,
    payload: highlights,
  }),
  setHighlightsState: (fetchState: FetchState): Action<FetchState> => ({
    type: highlightsTypes.SET_HIGHLIGHTS_STATE,
    payload: fetchState,
  }),
};

export default highlightsActions;
