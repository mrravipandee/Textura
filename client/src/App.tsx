import React, { useContext } from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppContext } from './context/AppContext';

const App = () => {

  const context = useContext(AppContext);
  const showLogin = context?.showLogin ?? false;

  

  return (
    <div className='px-4 sm:px-10 md:px-10 lg:px-28 min-h-screen bg-gradient-to-b from-[#f9fbfd]/20 to-[#7b19d8]/30'>
      <Navbar />
      {
        showLogin && <Login />
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
