import React from "react";
import { Headline, Product, Recommended } from "../../components";
import { Introduction } from "./components";
import gundamData from "../../data/gundam";

function index() {
  return (
    <>
      <main>
        <Headline
          heading={
            <>
              Explore Our Model Kits Collection<span></span>Where Every Detail
              Ignites Your Gundam Journey!
            </>
          }
          description={
            "Dive into the artistry of Gundam with our unparalleled collection of model kits. Each piece is a canvas for your creativity, a masterpiece waiting to be crafted. From iconic classics to exclusive releases, our selection offers a universe of possibilities. Unleash the precision, fuel your passion, and strive for perfection as you build your own Gundam legacy. Gear up, pilot – your destiny awaits in every meticulously designed kit."
          }
        />
        <Product data={gundamData} />
        <Introduction />
        <Recommended
          data={gundamData}
          heading={"Explore Our Recommended Items"}
          description={
            "Embark on a journey to excellence with our handpicked selection of recommended items. From must-have tools to exclusive accessories, these essentials are chosen to enhance your Gundam experience. Elevate your mastery, whether you're a seasoned builder or just beginning your mecha adventure. Dive into the world of top-tier recommendations – gear up, pilot, and take your Gundam journey to new heights!"
          }
        />
      </main>
    </>
  );
}

export default index;
