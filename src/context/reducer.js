import { SET_USER_TOKEN } from './actions';

const reducer = (state, action) => {
  if (action.type === SET_USER_TOKEN) {
    return { ...state, userToken: action.payload };
  }
  return { ...state };
};

export default reducer;
