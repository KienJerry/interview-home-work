// import type { ReqLogin, ReqLoginSocial } from "@/interfaces/auth.interface";

import {
  GET_USER_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  COMMENT_REQUEST,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
} from "./actionTypes";
import type {
  GetUserFail,
  GetUserFailPayload,
  GetUserSuccess,
  GetUserSuccessPayload,
} from "./types";

export const getPostRequest = (data: any): any => ({
  type: GET_POST_REQUEST,
  action: data,
});
export const CommentRequest = (data: any): any => ({
  type: COMMENT_REQUEST,
  action: data,
});
export const getCommentRequest = (data: any): any => ({
  type: GET_COMMENT_REQUEST,
  action: data,
});

export const getPostSuccess = (payload: any): any => {
  return {
    type: GET_POST_SUCCESS,
    payload,
  };
};

export const getCommentSuccess = (payload: any): any => {
  return {
    type: GET_COMMENT_SUCCESS,
    payload,
  };
};

export const getPostFail = (payload: any): any => {
  return {
    type: GET_USER_FAIL,
    payload,
  };
};
