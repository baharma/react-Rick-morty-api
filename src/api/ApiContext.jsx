import { createContext, useContext } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ apiUrl, children, token }) => (
  <ApiContext.Provider value={{ apiUrl, token }}>
    {children}
  </ApiContext.Provider>
);

export const useApiUrl = () => useContext(ApiContext);
