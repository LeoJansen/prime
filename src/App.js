import React from "react";
import { Article, Brand, CTA, Feature, Navbar } from "./components";
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
