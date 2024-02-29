import type {
  ReqCreateAccount,
  ReqForgotPassword,
  ReqLogin,
  ReqLoginSocial,
  ReqResetPassword,
} from "@/interfaces/auth.interface";
import { api } from "@/utils/axios.config";

const AUTH_PATH = "/auth";

const AuthService = {
  create: (body: ReqCreateAccount) => {
    return api.post(`${AUTH_PATH}/register`, body);
  },
  login: (body: ReqLogin) => {
    return api.post(`${AUTH_PATH}/login`, body);
  },
  getProfile: () => {
    return api.get(`${AUTH_PATH}/profile`);
  },
};

export default AuthService;
