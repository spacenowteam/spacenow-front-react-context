
import {
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE
} from '../actions/auth'

import { userLogin } from '../services/auth'

export const initialState = {
  token: null,
  userId: null,
  isLoggedIn: false,
  isLoading: true,
  isError: false
};

export const authReducer = async (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      const resp = await userLogin({ email: action.payload.email, password: action.payload.password })
      console.log(resp)
      return {
        ...state,
        resp
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
