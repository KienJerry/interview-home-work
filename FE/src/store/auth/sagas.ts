import { all, put, takeLatest, call } from "redux-saga/effects";
import { message } from "antd";
import type { ResGetUserProfile } from "@/interfaces/auth.interface";
import Cookies from "js-cookie";
import { COOKIE_KEY, RES_MESS, STORAGE_KEY } from "@/utils/config";
import {
  getUserFail,
  getUserSuccess,
  registerFail,
  registerSuccess,
  getUserRequest,
} from "./actions";
import {
  GET_USER_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
} from "./actionTypes";
import AuthService from "@/services/AuthService";

function* getUserSaga(): any {
  try {
    const response = yield AuthService.getProfile();
    const result: any = response.data;
    if (response.success === true) {
      yield put(
        getUserSuccess({
          profile: result,
        }),
      );
    }
  } catch (e) {
    yield put(
      getUserFail({
        error: e.message,
      }),
    );
  }
}

function* loginSaga({ payload }: any): any {
  const key = "updatables";
  try {
    const response = yield call(AuthService.login, payload);

    if (response?.token) {
      Cookies.set(COOKIE_KEY.ACCESS_TOKEN, response?.token);
      yield put(getUserRequest());
    } else {
      message.error({
        key,
        type: "loading",
        content: response?.message,
      });
      yield put(
        registerFail({
          error: response?.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      registerFail({
        error: e.message,
      }),
    );
  }
}

function* registerSaga({ payload }: any): any {
  const key = "updatables";
  const keysucess = "keysucess";
  try {
    const response = yield call(AuthService.create, payload);
    const result: any = response.data;
    if (result?.success === true) {
      message.success({
        keysucess,
        type: "success",
        content: response?.message,
      });
      yield put(
        registerSuccess({
          success: response?.message,
        }),
      );
    } else {
      message.error({
        key,
        type: "loading",
        content: response?.message,
      });
      yield put(
        registerFail({
          error: response?.message,
        }),
      );
    }
  } catch (e) {
    yield put(
      registerFail({
        error: e.message,
      }),
    );
  }
}

export default function* authSaga() {
  yield all([
    takeLatest(GET_USER_REQUEST, getUserSaga),
    takeLatest(LOGIN_REQUEST, loginSaga),
    takeLatest(REGISTER_REQUEST, registerSaga),
  ]);
}
