import React from "react";
import "./card.css";

function index({ children, title, countryCode, price, tax, color, category }) {
  return (
    <div className={`card ${color}`}>
      {children}
      <div className="card-body">
        <h5 className="card-title heading">{title}</h5>
        <div className="card-detail">
          <p className="card-text country-code">{countryCode}</p>
          <p className="card-text price">{price}</p>
          <p className="card-text tax">{tax}</p>
        </div>
        <button className="btn">
          <a href="">予約注文</a>
        </button>
      </div>
      {category === "available" && (
        <div className="card-label">Available Item</div>
      )}
    </div>
  );
}

export default index;
