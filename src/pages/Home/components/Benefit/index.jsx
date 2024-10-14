import React from "react";
import exploreImg from "../../../../assets/images/explore.png";
import collectImg from "../../../../assets/images/collect.png";
import masterImg from "../../../../assets/images/master.png";
import connectImg from "../../../../assets/images/connect.png";
import "./benefit.css";

function index() {
  return (
    <div className="benefit container">
      <div className="section">
        <div className="left-content">
          <h2 className="heading">Why Choose Us?</h2>
          <p className="description">
            At our Gundam Universe, we meticulously craft an immersive haven
            that transcends mere fandom; it's a digital pilgrimage for both
            dedicated enthusiasts and those taking their first steps into the
            awe-inspiring realm of Japanese mecha mastery. Here's where we
            elevate your experience:
          </p>
        </div>
        <div className="right-content">
          <div>
            <img src={exploreImg} alt="" />
            <p className="description">Explore the Archives</p>
          </div>
          <div>
            <img src={collectImg} alt="" />
            <p className="description">Collectible Treasures</p>
          </div>
          <div>
            <img src={masterImg} alt="" />
            <p className="description">Master the Art of Gundam</p>
          </div>
          <div>
            <img src={connectImg} alt="" />
            <p className="description">Connect with the Community</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
