const BASE = process?.env?.REACT_APP_API_BASE_URL || 'http://localhost:3000';
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