import { createSelector } from "reselect";

import type { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.blog.pending;

const getBlog = (state: AppState) => state.blog;

const getError = (state: AppState) => state.blog.error;

const getComment = (state: AppState) => state.blog.comment;

export const getBlogSelector = createSelector(getBlog, (todos) => todos);
export const getCommentSelector = createSelector(getComment, (todos) => todos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
