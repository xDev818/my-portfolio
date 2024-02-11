import React from 'react';
// import ReactDOM from 'react-dom';

//import css in order
// import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/img/icons/css/ionicons.css';
import './assets/img/font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import BackToTop from './components/back-top.jsx';
import Preloader from './components/preloader';

function App() {
  

  return (
    <>
    <Navbar/>
    <Intro/>
    <About/>
    <Portfolio/>
    <Contact/>
    <BackToTop/>
    <Preloader/>
    </>
  )
}

export default App
