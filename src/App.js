import React from "react";
import { Article, Brand, CTA, Feature, Navbar } from "./components";
import { Blog, Features, Footer, Header, PartsChecked, Testimonials} from "./containers";
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
      <PartsChecked />
      <Testimonials/>

      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
