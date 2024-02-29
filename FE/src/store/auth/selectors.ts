import { createSelector } from "reselect";

import type { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.auth.pending;

const getProfile = (state: AppState) => state.auth.profile;

const getError = (state: AppState) => state.auth.error;

export const getProfileSelector = createSelector(getProfile, (todos) => todos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending,
);

export const getErrorSelector = createSelector(getError, (error) => error);
