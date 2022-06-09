import React from 'react'
import Homepage from './components/Homepage';
import { Routes, Route } from 'react-router-dom';
import Productpage from './components/Productpage';
// import ScreenLoader from "./components/ScreenLoader"


function App() {
  return (
    <Routes>
      <Route element={<Homepage />}>
        <Route path='/' element={<Productpage />} />
      </Route>
    </Routes>
  );
}

export default App;
