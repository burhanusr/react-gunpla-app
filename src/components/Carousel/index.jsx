import React from "react";
import sponsor from "../../data/sponsor.js";
import "./carousel.css";

function index() {
  return (
    <div className="carousel container">
      <div className="section">
        <div className="sponsor-slide">
          {sponsor.map((el) => (
            <img key={el.id} src={el.src} alt={`${el.name} Logo`}></img>
          ))}
        </div>
        <div className="sponsor-slide">
          {sponsor.map((el) => (
            <img key={el.id} src={el.src} alt={`${el.name} Logo`}></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
