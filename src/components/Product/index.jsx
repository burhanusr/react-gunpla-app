import React, { useState } from "react";
import { Card, Thumbnail, Categories } from "../index.js";
import "./product.css";

function index({ data }) {
  const [items, setItems] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "upcoming", "available", "no longer available"];

  const counter = {};
  data.forEach((el) => {
    if (counter[el.category]) {
      counter[el.category] += 1;
    } else {
      counter[el.category] = 1;
    }
  });

  function filterItems(category) {
    setActiveCategory(category);

    if (category === "all") {
      setItems(data);
    } else {
      const newItems = data.filter((el) => category === el.category);
      setItems(newItems);
    }
  }

  return (
    <div className="products container">
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        filterItems={filterItems}
        numberCategory={counter}
      />
      <div className="products-card">
        {items.map((el, i) =>
          i % 2 === 0 ? (
            <Card
              key={el.id}
              title={el.title}
              countryCode={el.countryCode}
              price={el.price}
              tax={el.tax}
              color={"grey"}
              category={el.category}
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
              category={el.category}
            >
              <Thumbnail src={el.imageURL} short={el.short} />
            </Card>
          )
        )}
      </div>
      <div className="products-btn section">
        <button className="btn">
          <a href="#" className="btn-wrapper">
            <p>続きを見る</p>
            <span></span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default index;
