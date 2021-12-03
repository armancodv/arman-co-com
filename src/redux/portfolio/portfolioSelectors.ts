import {State} from '../models_d';
import {PortfolioSection} from './models_d';
const portfoliosSelectors = {
  getPortfolioSections: (state: State): PortfolioSection[] =>
    state?.portfolio?.data ?? [],
};

export default portfoliosSelectors;
