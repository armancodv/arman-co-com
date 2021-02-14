const BASE = process?.env?.REACT_APP_API_BASE_URL;
const getProfile = `${BASE}/profile.json`;
const getSkills = `${BASE}/skills.json`;
const getExperience = `${BASE}/experience.json`;
const apiConfig = {
    BASE,
    getProfile,
    getSkills,
    getExperience
}

export default apiConfig;