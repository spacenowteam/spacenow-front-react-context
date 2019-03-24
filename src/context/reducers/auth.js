
import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from '../actions/auth'

export const initialState = {
  token: null,
  userId: null,
  isLoggedIn: false,
  isLoading: true,
  isError: false
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    default:
      return state;
  }
};
