import React from "react";
import "./introduction.css";

function index() {
  return (
    <div className="introduction container">
      <div className="section">
        <h2 className="heading">Introduction</h2>
        <div className="content">
          <h3 className="sub-heading">Gundam</h3>
          <p className="description">
            Caraka Tech Gunpla is the best place to shop for unique Gundam
            items. We have a wide variety of merch that Gundam fans shouldn't
            miss out on, such as limited edition Gunpla, Gundam figures, and
            apparel that can only be purchased here
          </p>
        </div>
        <div className="content">
          <h3 className="sub-heading">What is Gundam?</h3>
          <p className="description">
            Mobile Suit Gundam is a 1979 anime featuring giant fighting robots
            known as "mobile suits." With its realistic depiction of war, focus
            on hard science fiction, and intricately woven human drama, Mobile
            Suit Gundam tells a story that cannot be described in terms of
            simple good versus evil (which had been the trend in robot anime up
            until that point). Because of this, the series has found
            international success and established the still popular "real robot
            anime" genre.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
