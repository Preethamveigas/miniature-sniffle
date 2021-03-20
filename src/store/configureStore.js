import React, { createContext, useContext, useReducer } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import rootReducer, { initialState } from '../reducers/index';

export const StateContext = createContext();
export const DispatchContext = createContext();

export const useStateValue = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);
const queryClient = new QueryClient();

function Store({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default Store;
