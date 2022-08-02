import React from 'react'
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import HomeNavigation from './components/HomeNavigation';
import Individualproduct from './components/Individualproduct';
import Mycart from './components/Mycart';

function App() {
  return (
    <Routes>
      <Route element={<HomeNavigation />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/product/*' element={<Individualproduct />} />
        <Route path='/mycart' element={<Mycart />} />
        <Route path='/products/*' element={<h1 className='relative top-32'>Single</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
