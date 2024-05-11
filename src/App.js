import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Becomeouragent from './components/becomeouragent/Becomeouragent';
import Ouragents from './components/ouragents/Ouragents';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';




function App() {
  return (
    <Router> {/* Wrap your components with BrowserRouter */}
      <Navbar />
      {/* <Home/> */}
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/Ouragents" element={<Ouragents />} />
          <Route path="/becomeouragent" element={<Becomeouragent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
