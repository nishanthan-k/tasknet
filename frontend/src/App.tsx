import React from 'react';
import SignUp from './pages/auth/SignUp';
import { Route, Routes } from 'react-router';
import Home from './pages/home/Home';
import AuthRoute from './routes/AuthRoute';

function App(): ReturnType<React.FC> {  
  return (
    <div className='w-screen h-screen font-primary'>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
