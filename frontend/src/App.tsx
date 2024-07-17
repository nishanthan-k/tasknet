import React, { useEffect } from 'react';
import SignUp from './pages/auth/SignUp';
import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import AuthRoute from './routes/AuthRoute';
import { useSetRecoilState } from 'recoil';
import { UserAtom } from './store/atoms/auth/Auth.atom';
import useLocalStorage from './hooks/ls/useLocalStorage';
import { UserAtomType } from './globals/types/user.types';
import Login from './pages/auth/Login';

function App(): ReturnType<React.FC> {
  const setUserAtom = useSetRecoilState(UserAtom);
  const { getLocalStorage } = useLocalStorage();
  
  useEffect(() => {
    const userData = getLocalStorage<UserAtomType>('user');
    if (userData) {
      setUserAtom(userData);
    }
  }, [getLocalStorage, setUserAtom]);

  return (
    <div className='w-screen h-screen font-primary'>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
