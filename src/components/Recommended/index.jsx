import React from "react";
import { Card, Thumbnail } from "../index.js";
import "./recommended.css";

function index({ data, heading, description }) {
  return (
    <div className="recommended container">
      <div className="section">
        <h2 className="heading">{heading}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="items-section">
        {data.slice(0, 4).map((el, i) =>
          i % 2 === 0 ? (
            <Card
              key={el.id}
              title={el.title}
              countryCode={el.countryCode}
              price={el.price}
              tax={el.tax}
              color={"grey"}
            >
              <Thumbnail src={el.imageURL} short={el.short} />
            </Card>
          ) : (
            <Card
              key={el.id}
              title={el.title}
              countryCode={el.countryCode}
              price={el.price}
              tax={el.tax}
            >
              <Thumbnail src={el.imageURL} short={el.short} />
            </Card>
          )
        )}
      </div>
    </div>
  );
}

export default index;
