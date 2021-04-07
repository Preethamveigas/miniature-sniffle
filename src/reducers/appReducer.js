import { LOADER, APP_LOGO } from '../constants/actionConstants';

const appReducer = (state, action) => {
  switch (action.type) {
    case APP_LOGO:
      return {
        ...state,
        logo: action.logo
      }
      break;
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
