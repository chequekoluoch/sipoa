import React from 'react';
import './App.css';
import Header from './components/Header';
import ControlledCarousel from './components/ControlledCarousel';
import Welcome from './components/Welcome';
import OurWork from './components/OurWork';
import AboutUs from './components/AboutUs';
import OurTeam from './components/OurTeam';
import Gallary from './components/Gallary';
import Volunteers from './components/Volunteers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <Header />
   <ControlledCarousel />
   <hr></hr>
    <Welcome />
    <hr></hr>
    <AboutUs />
    <hr></hr>
    <OurWork />
    <hr></hr>
    <OurTeam />
    <hr></hr>
    <Gallary />
    <hr></hr>
    <Volunteers />
    <hr></hr>
    <ContactUs />
    <hr></hr>
    <Footer />
   </>
  );
}

export default App;
