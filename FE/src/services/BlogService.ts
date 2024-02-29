import type {
  ReqCreateAccount,
  ReqForgotPassword,
  ReqLogin,
  ReqLoginSocial,
  ReqResetPassword,
} from "@/interfaces/auth.interface";
import { api } from "@/utils/axios.config";

const POST_PATH = "/post";
const COMMENT_PATH = "/comment";

const PostService = {
  comment: (body: any) => {
    return api.post(`${COMMENT_PATH}/create`, body);
  },
  getComment: (data: any) => {
    return api.get(
      `${COMMENT_PATH}?limit=${data?.limit}&page=${data?.page}&postId=${data?.postId}`,
    );
  },
  getPost: (data: any) => {
    return api.get(
      `${POST_PATH}?limit=${data?.limit}&page=${data?.page}&search=${data?.search}`,
    );
  },
  CreatePost: (body: any) => {
    return api.post(`${POST_PATH}/create`, body);
  },
};

export default PostService;
