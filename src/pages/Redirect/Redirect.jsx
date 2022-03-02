import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { getReturnedParamsFromSpotifyAuth } from '../../utils/helpers';

const Redirect = () => {
  const navigate = useNavigate();
  const { setUserToken } = useGlobalContext();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromSpotifyAuth(
        window.location.hash
      );

      if (access_token) {
        setUserToken(access_token);
        navigate('/spotify-clone');
      }
    }
  }, []);

  return <div>Redirecting to spotify app</div>;
};

export default Redirect;
