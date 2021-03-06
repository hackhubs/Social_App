import { USERS_POSTS_STATE_CHANGE, USERS_STATE_CHANGE } from "../constants";

const initialState = {
  currentUser: null,
  posts: [],
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USERS_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.currentUser,
      };
    case USERS_POSTS_STATE_CHANGE:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};
