import { createContext, useContext } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ apiUrl, children}) => (
  <ApiContext.Provider value={{ apiUrl }}>
    {children}
  </ApiContext.Provider>
);

export const useApiUrl = () => useContext(ApiContext);
