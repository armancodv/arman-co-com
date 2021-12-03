import axios from 'axios';
import apiConfig from '../../config/apiConfig';

const portfoliosApi = {
  getPortfolios: (): Promise<Response> => {
    return axios.get(apiConfig.getPortfolios);
  },
};

export default portfoliosApi;
