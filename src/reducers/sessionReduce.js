import {
  UPDATE_SELECTED_SESSIONS,
  UPDATE_SESSIONS,
} from '@/constants/actionConstants';

const userReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_SESSIONS:
      return {
        ...state,
        active: action.selected,
      };
    case UPDATE_SESSIONS:
      return {
        ...state,
        sessions: action.sessions,
      };
    default:
      return state;
  }
};

export default userReducer;
