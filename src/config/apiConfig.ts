const BASE = process?.env?.REACT_APP_API_BASE_URL;
const getProfile = `${BASE}/profile.json`;
const getSkills = `${BASE}/skills.json`;
const getExperience = `${BASE}/experience.json`;
const getHighlights = `${BASE}/highlights.json`;
const getPortfolios = `${BASE}/portfolio.json`;
const apiConfig = {
    BASE,
    getProfile,
    getSkills,
    getExperience,
    getHighlights,
    getPortfolios
}

export default apiConfig;