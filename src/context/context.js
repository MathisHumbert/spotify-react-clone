import { useContext, createContext, useReducer } from 'react';
import axios from 'axios';
import reducer from './reducer';

import { recently_played_tracks_endpoint } from '../utils/constant';

import { SET_USER_TOKEN } from './actions';

const localToken = localStorage.getItem('userToken') || '';

const initialState = {
  userToken: localToken,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUserToken = (token) => {
    dispatch({ type: SET_USER_TOKEN, payload: token });
    localStorage.setItem('userToken', token);
  };

  const getRecentlyPlayedTracks = async () => {
    try {
      const { data } = await axios(recently_played_tracks_endpoint, {
        headers: {
          Authorization: `Bearer ${state.userToken}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{ ...state, setUserToken, getRecentlyPlayedTracks }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
