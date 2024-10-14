import React from "react";
import { Headline, Product, Recommended } from "../../components";
import items from "../../data/items";

function index() {
  return (
    <>
      <main>
        <Headline
          heading={
            <>
              Discover Our Accessories Collection<span></span>Precision Accents
              For Your Mecha Masterpiece!
            </>
          }
          description={`Complete your Gundam masterpiece with our exclusive accessories collection. Each item is meticulously selected to add that perfect finishing touch to your mecha creation. From decals that tell a story to stands that showcase your masterpiece, our accessories are designed for the Gundam connoisseur. Explore the art of precision accents and elevate your Gundam style. Gear up, pilot, and perfect every detail of your mecha masterpiece!`}
        />

        <Product data={items} />
        <Headline
          heading={"Introduction"}
          description={`Step into a realm of unparalleled customization with our Accessories Collection, where every piece is a brushstroke on the canvas of your Gundam saga. Elevate your mecha masterpiece with exclusive accents designed to tell a story and showcase your unique style.`}
        />
        <Recommended
          data={items}
          heading={"Explore Our Recommended Items"}
          description={
            "Unlock the full potential of your Gundam build with our recommended accessories. From high-quality decals that add narrative depth to specialized stands that display your creation with pride, these top-tier picks are curated to enhance your modeling experience. Dive into the world of crafting perfection – explore our selection and discover the key accents that will set your mecha creation apart. Gear up, pilot, and let your Gundam masterpiece shine!"
          }
        />
      </main>
    </>
  );
}

export default index;
