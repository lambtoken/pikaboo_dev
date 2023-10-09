import React from "react";
import About from "./About";
import Hero from "./Hero"
import Filter from "./Filter";

import "./Body.css"

const Body = () => {
  return <div className="body">
    <Hero/>
    <Filter/>
    <About/>
  </div>
};

export default Body;