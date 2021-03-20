import { UPDATE_SELECTED_CHAT } from '../constants/actionConstants';

const chatReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_CHAT:
      return {
        ...state,
        selected: action.selected,
      };

    default:
      return state;
  }
};

export default chatReducer;
