import { all, call, put, takeLatest } from "redux-saga/effects";
import { message } from "antd";

import { COOKIE_KEY, RES_MESS } from "@/common/config/response.config";
import type { ResGetUserProfile } from "@/interfaces/auth.interface";

// import LearnersService from "@/services/LearnersService";
import {
  getCommentRequest,
  getCommentSuccess,
  getPostFail,
  getPostSuccess,
} from "./actions";
import {
  GET_POST_REQUEST,
  COMMENT_REQUEST,
  GET_COMMENT_REQUEST,
} from "./actionTypes";
import BlogService from "@/services/BlogService";
import AuthService from "@/services/AuthService";
import Cookies from "js-cookie";
import { getUserRequest, registerFail } from "../auth/actions";

function* getpostSaga({ action }: any): any {
  try {
    const response = yield BlogService.getPost(action);
    const result: any = response.data;
    if (response.success === true) {
      yield put(
        getPostSuccess({
          data: result,
        }),
      );
    }
  } catch (e) {
    yield put(
      getPostFail({
        error: e.message,
      }),
    );
  }
}

function* commentSage({ action }: any): any {
  const key = "updatables";
  try {
    const response = yield call(BlogService.comment, action);

    if (response?.success == true) {
      yield put(
        getCommentRequest({
          limit: 250,
          page: 1,
          postId: action?.postId,
        }),
      );
    } else {
      message.error({
        key,
        type: "loading",
        content: response?.message,
      });
      yield put(
        getPostFail({
          error: response?.message,
        }),
      );
    }
  } catch (e) {
    message.error({
      key,
      type: "loading",
      content: e?.message,
    });
    yield put(
      getPostFail({
        error: e.message,
      }),
    );
  }
}

function* getCommentSaga({ action }: any): any {
  try {
    const response = yield BlogService.getComment(action);

    console.log(response);
    const result: any = response.data;
    if (response.success === true) {
      yield put(
        getCommentSuccess({
          data: result,
        }),
      );
    }
  } catch (e) {
    yield put(
      getPostFail({
        error: e.message,
      }),
    );
  }
}

export default function* authSaga() {
  yield all([takeLatest(GET_POST_REQUEST, getpostSaga)]);
  yield all([takeLatest(COMMENT_REQUEST, commentSage)]);
  yield all([takeLatest(GET_COMMENT_REQUEST, getCommentSaga)]);
}
