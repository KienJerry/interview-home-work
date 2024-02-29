import {
  COMMENT_REQUEST,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./actionTypes";

const initialState: any = {
  pending: false,
  data: null,
  comment: null,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POST_REQUEST:
    case COMMENT_REQUEST:
    case GET_COMMENT_REQUEST:
    case GET_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case GET_COMMENT_SUCCESS:
      return {
        ...state,
        comment: action.payload.data,
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
