import { LOADER } from '../constants/actionConstants';

const appReducer = (state, action) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        loader: action.loader,
      };

    default:
      return state;
  }
};

export default appReducer;
