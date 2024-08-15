import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './index.css';
import './components/Header.css';
import './components/Hero.css';
import './components/Courses.css';
import './components/Testimonials.css';
import './components/Contact.css';
import './components/About.css';
import './components/Footer.css'

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <About />
    <Courses />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
