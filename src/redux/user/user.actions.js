// action types

const SET_CURRENT_USER = 'SET_CURRENT_USER';

// action creators

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
