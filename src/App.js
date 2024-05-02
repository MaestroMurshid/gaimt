import './App.css';

import React from 'react';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landing/Navbar"
import HeroSection from "./Components/HeroSection"
import LoginPage from './Components/LoginPage';
import Signup from "./Components/Signup"
import PosterGenerator from './PosterGenerator';
import LogoGenerator from "./LogoGenerator"


function App() {
  const aboutRef = React.createRef();
  const featuresRef = React.createRef();
  const [showLogin, setShowLogin] = useState(false); 

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    //  <div className="App" style={{ display:"flex" }}>
    //   <Navbar/>
    //   <div> 
    //   <HeroSection />
    //    <AboutSection ref={aboutRef} id="about" />  {/* Assign refs to sections */}
    //    <FeaturesSection ref={featuresRef} id="features" />
    //    <LoginPage onClose={() => setShowLogin(false)} />
    //    <Signup />
    //    <UserLogout/>
    //    <EntryBox/>
    //   </div>  
    //  </div>
    
// <div className="App" style={{
// display: "flex",
// }}>
//       <Navbar /> 
//       <div>
//         <HeroSection />
//       </div>
// </div>
<div className='App' style={{display: "flex"}}>
  <Navbar/>
  <div >
    <Routes>
        <Route path="/" element={<HeroSection />}/>
          {/* <Route path="about" element={<AboutSection />} /> */}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="generate" element={<PosterGenerator />} />
          <Route path="logo" element={<LogoGenerator />} />
      </Routes>
  </div>
</div>
  );
}

export default App;
