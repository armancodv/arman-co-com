const BASE = process?.env?.REACT_APP_API_BASE_URL || 'http://localhost:3000';
const getProfile = `${BASE}/profile.json`;
const getSkills = `${BASE}/skills.json`;
const apiConfig = {
    BASE,
    getProfile,
    getSkills
}

export default apiConfig;