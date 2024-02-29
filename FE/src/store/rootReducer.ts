import { combineReducers } from "redux";

import authReducer from "@/store/auth/reducer";
import blogReducer from "@/store/Blog/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
