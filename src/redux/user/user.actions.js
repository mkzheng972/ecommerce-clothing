import { UserActionTypes } from './user.types';

// action creators
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
