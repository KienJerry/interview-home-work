// import type { ReqLogin, ReqLoginSocial } from "@/interfaces/auth.interface";

import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_REQUEST_SUCCESS,
} from "./actionTypes";
import type {
  GetUserFail,
  GetUserFailPayload,
  GetUserRequest,
  GetUserSuccess,
  GetUserSuccessPayload,
} from "./types";

export const getUserRequest = (): GetUserRequest => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = (payload: any): any => {
  return {
    type: GET_USER_SUCCESS,
    payload,
  };
};

export const getUserFail = (payload: GetUserFailPayload): GetUserFail => {
  return {
    type: GET_USER_FAIL,
    payload,
  };
};

export const loginRequest = (payload: any): any => ({
  type: LOGIN_REQUEST,
  payload,
});

export const registerRequest = (payload: any): any => ({
  type: REGISTER_REQUEST,
  payload,
});
export const registerSuccess = (payload: any): any => ({
  type: REGISTER_REQUEST_SUCCESS,
  payload,
});
export const registerFail = (payload: any): any => {
  return {
    type: GET_USER_FAIL,
    payload,
  };
};
