import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
} from "./actionTypes";
import type { AuthActions, AuthState } from "./types";

const initialState: any = {
  pending: false,
  profile: null,
  error: null,
  success: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case GET_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        pending: false,
      };
    default:
      return {
        ...state,
        pending: false,
      };
  }
};
export default authReducer;
