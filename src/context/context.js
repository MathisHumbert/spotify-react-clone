import { useContext, createContext, useReducer } from 'react';
import axios from 'axios';
import reducer from './reducer';

import {
  recently_played_tracks_endpoint,
  get_user_playlist_endpoint,
  get_user_top_artists,
  get_user_top_tracks,
} from '../utils/constant';

import { FETCH_HOME_DATA, SET_USER_TOKEN } from './actions';

const localToken = localStorage.getItem('userToken') || '';

const initialState = {
  userToken: localToken,
  recently_played: [],
  user_playlists: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const spotifyFetch = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      Authorization: `Bearer ${state.userToken}`,
    },
  });

  const setUserToken = (token) => {
    dispatch({ type: SET_USER_TOKEN, payload: token });
    localStorage.setItem('userToken', token);
  };

  const fetchHomeData = async () => {
    const allPromise = Promise.all([
      spotifyFetch(recently_played_tracks_endpoint),
      spotifyFetch(get_user_playlist_endpoint),
    ]);

    try {
      const [p1, p2] = await allPromise;
      dispatch({
        type: FETCH_HOME_DATA,
        payload: {
          recently_played: p1.data.items,
          user_playlists: p2.data.items,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAnyData = async () => {
    try {
      const { data } = await spotifyFetch(get_user_top_tracks);
      console.log(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, setUserToken, fetchHomeData, getAnyData }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
