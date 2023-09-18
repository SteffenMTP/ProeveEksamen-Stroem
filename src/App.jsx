import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import Header from './Layout/Header.jsx';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer.jsx';

import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Service from './pages/Service.jsx';
import FAQ from './pages/FAQ.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import NoMatch from './pages/NoMatch';





function App() {
  return (

    <Router>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/aboutus" element={< AboutUs />} />
          <Route path="/service" element={< Service />} />
          <Route path="/faq" element={< FAQ />} />
          <Route path="/news" element={< News />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
