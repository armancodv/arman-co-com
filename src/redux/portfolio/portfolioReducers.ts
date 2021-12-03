import {Action, FetchState} from '../models_d';
import {PortfoliosState} from './models_d';
import portfoliosTypes from './portfolioTypes';

const initialState: PortfoliosState = {
  data: [],
  dataState: FetchState.INIT,
};

const portfoliosReducers = (
    state: PortfoliosState = initialState,
    action: Action,
): PortfoliosState => {
  switch (action.type) {
    case portfoliosTypes.SET_PORTFOLIOS:
      return {
        ...state,
        data: action.payload || state.data,
      };
    case portfoliosTypes.SET_PORTFOLIOS_STATE:
      return {
        ...state,
        dataState: action.payload || FetchState.INIT,
      };
    default:
      return state;
  }
};

export default portfoliosReducers;
