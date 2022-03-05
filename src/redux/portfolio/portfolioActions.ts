import { Action, FetchState } from '../models_d';
import { PortfoliosResponse } from './models_d';
import portfoliosTypes from './portfolioTypes';
const portfoliosActions = {
  fetchPortfolios: (): Action => ({
    type: portfoliosTypes.FETCH_PORTFOLIOS,
  }),
  setPortfolios: (
    portfolios: PortfoliosResponse
  ): Action<PortfoliosResponse> => ({
    type: portfoliosTypes.SET_PORTFOLIOS,
    payload: portfolios,
  }),
  setPortfoliosState: (fetchState: FetchState): Action<FetchState> => ({
    type: portfoliosTypes.SET_PORTFOLIOS_STATE,
    payload: fetchState,
  }),
};

export default portfoliosActions;
