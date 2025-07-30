/*import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
*/
// src/services/githubService.js
import axios from 'axios';

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  return response.data;
};
