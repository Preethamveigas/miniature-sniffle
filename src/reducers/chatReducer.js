import { UPDATE_SELECTED_CHAT, SESSION_LIST } from '../constants/actionConstants';

const chatReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_CHAT:
      return {
        ...state,
        selected: action.payload,
      };
      break;
    case SESSION_LIST:
      return {
        ...state,
        session: action.payload
      }
      break;

    default:
      return state;
  }
};

export default chatReducer;
