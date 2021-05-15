import React, { createContext, useContext, useReducer, memo } from 'react';

import rootReducer, { initialState } from '../reducers/index';

export const StateContext = createContext();
export const DispatchContext = createContext();

export const useStateValue = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);


export const UserSelector = () => {
  const { user } = useStateValue()
  return { user: user }
}

export const sessionSelector = () => {
  const { chats } = useStateValue();
  return { sessions: chats.session }
}
export const appSelector = () => {
  const { app } = useStateValue();
  return { app: app }
}


const Store = memo(({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
})

export const connect = (WrappComp, select) => {
  return (props) => {
    let selector = {}
    if (typeof select === 'function') {
      selector = select()
    }
    else if (Array.isArray(select)) {
      select.forEach(fn => {
        let old = selector;
        let news = fn()
        selector = { ...old, ...news }
      })
    }
    return <WrappComp  {...selector} {...props} />
  }
}

export default Store;
