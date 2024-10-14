import React from "react";
import "./categories.css";

function index({ categories, activeCategory, filterItems, numberCategory }) {
  return (
    <div className="categories">
      <ul className="categories-list">
        {categories.map((el, i) =>
          el === "all" ? (
            <li
              key={i}
              className={`categories-item ${activeCategory === el && "active"}`}
              onClick={() => filterItems(el)}
            >
              {el}
            </li>
          ) : (
            <li
              key={i}
              className={`categories-item ${activeCategory === el && "active"}`}
              onClick={() => filterItems(el)}
            >{`${el} Items (${
              numberCategory[el] ? numberCategory[el] : 0
            })`}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default index;
