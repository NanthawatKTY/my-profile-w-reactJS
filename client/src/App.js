import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
// import About from './containers/About/About';

import { Navbar } from './components';
// import Navbar from './components/Navbar/Navbar';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Skills/>
    <Testimonial/>
    <Footer/>
  </div>
);

export default App;