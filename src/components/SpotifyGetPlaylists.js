import { useEffect, useState } from 'react';
import axios from 'axios';

const playlists_endpoint = 'https://api.spotify.com/v1/me/playlists?limit=10';

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setToken(localStorage.getItem('accessToken'));
    }
  }, []);

  const handleGetPlaylists = () => {
    axios
      .get(playlists_endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={handleGetPlaylists}>get Playlists</button>
    </div>
  );
};

export default SpotifyGetPlaylists;
