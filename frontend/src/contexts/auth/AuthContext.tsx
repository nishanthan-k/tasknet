import { createContext, ReactNode } from 'react';
import useLocalStorage from '../../hooks/ls/useLocalStorage';

type AuthContextValue = {
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthContextValue>({ isLoggedIn: false });

type AuthContextProviderProps = {
  children: ReactNode;
};

const AuthContextProvider = (props: AuthContextProviderProps): JSX.Element => {
  const { getLocalStorage } = useLocalStorage();
  const isLoggedIn = !!getLocalStorage('user');

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
