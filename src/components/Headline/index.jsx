import React from "react";
import "./headline.css";

function index({ heading, description }) {
  return (
    <div className="headline container">
      <div className="section">
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default index;
