import axios from 'axios';
import apiConfig from '../../config/apiConfig';

const highlightsApi = {
  getHighlights: (): Promise<Response> => {
    return axios.get(apiConfig.getHighlights);
  },
};

export default highlightsApi;
