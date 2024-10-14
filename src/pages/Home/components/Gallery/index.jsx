import React from "react";
import gundam from "../../../../data/gundam.js";
import "./gallery.css";
import { Thumbnail } from "../../../../components/index.js";

function index() {
  let gallery = [];
  let text = ["探検する", "集める", "征服する", "愛好家"];
  let index = 0;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        if ((k + i) % 2 === 0) {
          gallery.push(
            <div className="gallery-image grey">
              <Thumbnail
                src={gundam[index].imageURL}
                short={gundam[index].short}
              />
            </div>
          );
        } else {
          gallery.push(
            <div className="gallery-text">
              <p>{text[index]}</p>
            </div>
          );
        }
      }
      index++;
    }
  }

  return (
    <div className="gallery container">
      <div className="gallery-section">
        {gallery.map((el, i) => (
          <React.Fragment key={i}>{el}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default index;
