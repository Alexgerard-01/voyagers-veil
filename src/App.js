import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Explore from './Components/Pages/Explore';
import Signup from './Components/Pages/Signup';
import Footer from './Components/Footer'; 


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/sign-up' element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
