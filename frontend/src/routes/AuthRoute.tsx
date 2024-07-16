import { Navigate, Outlet } from 'react-router-dom';
import { ReactElement, useContext } from 'react';
import { AuthContext } from '../contexts/auth/AuthContext';

export default function AuthRoute(): ReactElement {
  const {isLoggedIn} = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to='/signup' />;
}
