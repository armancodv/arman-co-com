import axios from 'axios';
import apiConfig from "../../config/apiConfig";

const skillsApi = {
    getSkills: (): Promise<Response> => {
        return axios.get(apiConfig.getSkills)
    }
}

export default skillsApi;