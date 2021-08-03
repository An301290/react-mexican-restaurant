import React from "react";
import { FeatureContainer, FeatureButton } from "./Feature.style";

function Feature() {
  return (
    <FeatureContainer>
      <h1>Taco of the day</h1>
      <p>Taco al pastor, served with marinade pork meet slightly spicy.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
}
 
export default Feature;
