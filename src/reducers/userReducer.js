import { LOGIN } from '@/constants/actionConstants';

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: action.logged,
        data: action.data,
        token: null,
      };
    default:
      return state;
  }
};

export default userReducer;
