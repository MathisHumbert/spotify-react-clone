import { FETCH_HOME_DATA, SET_USER_TOKEN } from './actions';

const reducer = (state, action) => {
  if (action.type === SET_USER_TOKEN) {
    return { ...state, userToken: action.payload };
  }
  if (action.type === FETCH_HOME_DATA) {
    const { recently_played, user_playlists } = action.payload;
    return { ...state, recently_played, user_playlists };
  }
  return { ...state };
};

export default reducer;
