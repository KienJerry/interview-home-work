import { all, fork } from "redux-saga/effects";

import authSaga from "./auth/sagas";
import blogSaga from "./Blog/sagas";

export function* rootSaga() {
  yield all([fork(authSaga)]);
  yield all([fork(blogSaga)]);
}
