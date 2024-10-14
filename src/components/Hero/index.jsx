import React from "react";
import "./hero.css";

function index() {
  return (
    <div className="hero container">
      <div className="section">
        <div className="hero-text">
          <h1 className="heading">
            Dive Into the Epic World Of Gundam Warfare!
          </h1>
          <p className="description">
            Welcome to the digital gateway where the spirit of Japanese mecha
            excellence comes to life – introducing our Gundam-themed haven!
            Immerse yourself in the captivating world of these colossal robots,
            straight from the heart of Japan's iconic anime and manga culture.
          </p>
          <div className="rectangle"></div>
          <button className="btn">
            <a href="#" className="btn-wrapper">
              <p>今すぐ購入</p>
              <span></span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
