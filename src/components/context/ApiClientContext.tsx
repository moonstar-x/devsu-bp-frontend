import React from 'react';
import { Client } from '$services/api/client/Client.ts';

interface Context {
  client: Client
}

interface ProviderProps {
  children: React.ReactNode
}

const client: Client = new Client(import.meta.env.VITE_API_URL, import.meta.env.VITE_ACCOUNT_ID);

const DEFAULT_CONTEXT: Context = {
  client
};

const ApiClientContext = React.createContext<Context>(DEFAULT_CONTEXT);

const ApiClientContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const context: Context = {
    client
  };

  return (
    <ApiClientContext.Provider value={context}>
      {children}
    </ApiClientContext.Provider>
  );
};

export {
  ApiClientContext,
  ApiClientContextProvider
};
