import React from 'react';
import { Footer, Navbar } from './Components';
import { LandingPage } from './Pages';
// import { LandingPage } from './Pages/Landingpage';



function App() {
  return (
      <>
        <Navbar/> 
        <LandingPage/>    
        <Footer/>   
      </>
  );
}

export default App;
