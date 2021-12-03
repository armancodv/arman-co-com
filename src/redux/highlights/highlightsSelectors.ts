import {State} from '../models_d';
import {Highlight} from './models_d';
const highlightsSelectors = {
  getHighlights: (state: State): Highlight[] => state?.highlights?.data ?? [],
};

export default highlightsSelectors;
