// src/services/githubAPI.js
import axios from 'axios';

const GITHUB_API = 'https://api.github.com';

const headers = {
  Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
};

export const fetchGitHubUser = async (username) => {
  const response = await axios.get(`${GITHUB_API}/users/${username}`, {
    headers,
  });
  return response.data;
};
