import React from "react";

import ContactCard from "./ContactCard";
import data from "../data/data";

import "./Footer.css"

const Footer = () => {
  return <div className="footer">
    <div className="contact-container">
      {data.DeveloperData.map((dev, key) => {
        return <ContactCard dev={dev} key={key} />
      })}
    </div>
  </div>;
};

export default Footer;
