import React from 'react'
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import HomeNavigation from './components/HomeNavigation';
import Individualproduct from './components/Individualproduct';
import Mycart from './components/Mycart';
import User from './components/User/User';
import RegistrationForm from './components/User/RegistrationForm';
import Login from './components/User/Login_Form';
import UserProfile from './components/User/UserProfile';

function App() {
  return (
    <Routes>
      <Route element={<HomeNavigation />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/*' element={<Individualproduct />} />
        <Route path='/mycart' element={<Mycart />} />
        <Route path='/products/*' element={<h1 className='relative top-32'>Single</h1>} />
        <Route element={<User/>} >
          <Route path='/user/registration' element={<RegistrationForm/>}/>
          <Route path='/user/login' element={<Login/>}/>
          <Route path='/user/profile' element={<UserProfile/>}/>
        </Route>
      </Route>
      <Route path="*" element={<h1 className='text-4xl'>No Page Found !! 404</h1>} />
    </Routes>
  );
}

export default App;
