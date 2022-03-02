import { FaSpotify } from 'react-icons/fa';
import { url } from '../../utils/constant';

const Login = () => {
  const handleLogin = () => {
    window.location = url;
  };

  return (
    <div>
      <header>
        <FaSpotify />
        <h1>Spotify</h1>
      </header>
      <p>Pour continuer, connectez-vous à spotify.</p>
      <button onClick={handleLogin}>se connecter</button>
    </div>
  );
};

export default Login;
