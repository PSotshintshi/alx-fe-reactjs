/*import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', width: '300px' }}
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width={100} style={{ borderRadius: '50%' }} />
            <h2>{user.name || user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
*/

import { useState } from 'react';
import { searchUsers } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await searchUsers({ username, location, minRepos });
      setResults(data.items || []);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button
          type="submit"
          className="col-span-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-600">Looks like we cant find the user</p>}

        {results.length > 0 && (
          <ul className="grid gap-4 mt-4">
            {results.map((user) => (
              <li key={user.id} className="flex items-center gap-4 p-4 border rounded-md">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h2 className="text-lg font-semibold">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
