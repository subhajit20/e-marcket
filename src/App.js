import React from 'react'
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import HomeNavigation from './components/HomeNavigation';


function App() {
  return (
    <Routes>
      <Route element={<HomeNavigation />}>
        <Route path='/' element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
