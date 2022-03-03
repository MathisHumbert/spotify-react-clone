import { useEffect } from 'react';
import { useGlobalContext } from '../../context/context';

const HomeSpotify = () => {
  const { userToken, fetchHomeData, recently_played, user_playlists } =
    useGlobalContext();

  // useEffect(() => {
  //   fetchHomeData();
  // }, []);

  return (
    <div>
      <h1>home spotify</h1>
      <h2>user token: {userToken}</h2>
      {/* {recently_played.slice(0, 3).map((item) => {
        console.log(item);
        return <img src={item.track.album.images[1].url} alt='' />;
      })} */}
    </div>
  );
};

export default HomeSpotify;
