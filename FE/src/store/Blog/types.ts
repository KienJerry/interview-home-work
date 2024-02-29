import type {
  ReqLogin,
  ReqLoginSocial,
  ResGetUserProfileData,
} from "@/interfaces/auth.interface";

import type {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_MANUAL_REQUEST,
  LOGIN_SOCIAL_REQUEST,
} from "./actionTypes";

export interface AuthState {
  profile: ResGetUserProfileData | null;
  pending: boolean;
  error: string | null;
}

// Login Type

export interface LoginManualRequest {
  type: typeof LOGIN_MANUAL_REQUEST;
  payload: ReqLogin;
}

export interface LoginSocialRequest {
  type: typeof LOGIN_SOCIAL_REQUEST;
  payload: ReqLoginSocial;
}
export interface LoginFailPayload {
  error: string;
}
export interface LoginFail {
  type: typeof LOGIN_FAIL;
  payload: LoginFailPayload;
}

// User Profile Type

export interface GetUserRequest {
  type: typeof GET_USER_REQUEST;
}

export interface GetUserSuccessPayload {
  profile: ResGetUserProfileData;
}

export interface GetUserSuccess {
  type: typeof GET_USER_SUCCESS;
  payload: GetUserSuccessPayload;
}

export interface GetUserFailPayload {
  error: string;
}

export interface GetUserFail {
  type: typeof GET_USER_FAIL;
  payload: GetUserFailPayload;
}

export type AuthActions =
  | LoginManualRequest
  | LoginSocialRequest
  | LoginFail
  | GetUserRequest
  | GetUserSuccess;
