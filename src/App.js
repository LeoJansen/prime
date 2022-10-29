import React from "react";
import {  Brand, CTA, Navbar } from "./components";
import { Blog, Features, Footer, Header, Testimonials} from "./containers";

import "./App.scss";
const App = () => {
  return (
    <div className="App">
 
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Features />
      <Blog />
      <CTA />
      <Testimonials/>
  
      

    
    
      <Footer />
    </div>
  );
};

export default App;
