import { useGlobalContext } from '../../context/context';

const HomeSpotify = () => {
  const { userToken, getRecentlyPlayedTracks } = useGlobalContext();

  return (
    <div>
      <h1>home spotify</h1>
      <h2>user token: {userToken}</h2>
      <button onClick={getRecentlyPlayedTracks}>get history</button>
    </div>
  );
};

export default HomeSpotify;
