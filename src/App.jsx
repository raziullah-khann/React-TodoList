import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Header />
    <Home />
    <Outlet />
    </>
  )
}

export default App
