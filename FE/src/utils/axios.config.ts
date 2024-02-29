import { message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

import type { Res } from "@/interfaces/common.interface";

import { COOKIE_KEY } from "./config";
// eslint-disable-next-line import/no-cycle

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 30000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const accessToken = Cookies.get(COOKIE_KEY.ACCESS_TOKEN);
  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    const data: Res = error?.response?.data;
    if (data && data.statusCode === 401) {
      window.location.href = "/login";
    }

    // else if (data.statusCode === 406) {
    //   message.error("Hãy chọn tài khoản khác !");
    // }
    // const message =
    //   error && error?.response?.data?.message
    //     ? error?.response?.data?.message
    //     : "Sorry, something went wrong";
    // const status =
    //   error && error?.response?.status ? error?.response?.status : null;
    // if (status === 401) {
    // } else if (status === 422) {
    // } else if (status >= 500 || message === "Network Error") {
    // } else if (status === 410) {
    // } else {
    // }
    // return Promise.reject(error);
    return data;
  },
);

// api.defaults.headers.common.Authorization = getToken()
//   ? `Bearer ${getToken()}`
//   : null;

export function setAuthorization(token: any) {
  api.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
}

export function clearAuthorization() {
  delete api.defaults.headers.common.Authorization;
}

export function removeAuthorization() {
  setAuthorization(null);
}
