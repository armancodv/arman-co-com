import axios from 'axios';
import apiConfig from "../../config/apiConfig";

const profileApi = {
    getProfile: (): Promise<Response> => {
        return axios.get(apiConfig.getProfile)
    }
}

export default profileApi;