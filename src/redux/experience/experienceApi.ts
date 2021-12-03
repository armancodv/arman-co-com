import axios from 'axios';
import apiConfig from '../../config/apiConfig';

const experienceApi = {
  getExperience: (): Promise<Response> => {
    return axios.get(apiConfig.getExperience);
  },
};

export default experienceApi;
