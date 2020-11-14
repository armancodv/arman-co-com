import axios from 'axios';

const profileApi = {
    getProfile: (): Promise<Response> => {
        return axios.get('')
    }
}

export default profileApi;