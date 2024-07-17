import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useLocalStorage from '../hooks/ls/useLocalStorage';
import { UserAtomType } from '../globals/types/user.types';

export default function AuthRoute(): ReactElement {
  const { getLocalStorage } = useLocalStorage();
  const userData = getLocalStorage<UserAtomType>('user');
  const isAuth = Boolean(userData?.email);

  console.log('isAuth', isAuth);

  return isAuth ? <Outlet /> : <Navigate to='/signup' />;
}
