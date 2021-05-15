import { LOADER, APP_LOGO,APP_SET_FILTER_ACTIVE } from '../constants/actionConstants';

const appReducer = (state, action) => {
  switch (action.type) {
    case APP_LOGO:
      return {
        ...state,
        logo: action.logo
      }
      break;
    case APP_SET_FILTER_ACTIVE:
      return {
        ...state,
        activeTab: action.active
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
