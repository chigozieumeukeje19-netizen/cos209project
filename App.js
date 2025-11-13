import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
