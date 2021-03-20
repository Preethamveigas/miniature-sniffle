import sessionReduce from './sessionReduce';
import chatReducer from './chatReducer';
import userReducer from './userReducer';
import appReducer from './appReducer';

const rootReducer = ({
  session, app, chats, user,
}, action) =>
  // middleware goes here, i.e calling analytics service, etc.
  ({
    session: sessionReduce(session, action),
    chats: chatReducer(chats, action),
    user: userReducer(user, action),
    app: appReducer(app, action),
  });

export const initialState = {
  chats: {
    session: [],
    active: [],
    chat: [],
  },
  user: {
    logged: null,
    role: null,
    data: null,
  },
  app: {
    loader: false,
  },
};

export default rootReducer;
