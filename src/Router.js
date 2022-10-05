import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import GoogleCallback from './pages/GoogleCallback';
import Home from './pages/Home';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />}/>
      <Route path='/user' element={<Dashboard />}/>
      <Route path='/api/google/callback' element={<GoogleCallback />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default Router;
