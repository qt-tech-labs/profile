// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Portfolio from './components/portfolio';
import About from './components/about';
import Experience from './components/experience';
import Testimonial from './components/tesimonial';
import Services from './components/services';
import Contact from './components/contact';
import { useEffect } from 'react';
import Globals from './Globals';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = Globals.Colors['bg-primary']
    document.body.classList.add("text-white")
    // document.body.classList.add("box-border")
  }, [])
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
