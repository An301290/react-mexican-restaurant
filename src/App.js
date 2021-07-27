import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import {
  productDataTaco,
  productDataMargaritas,
} from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite Taco" data={productDataTaco} />
      <Products heading="Choose your Margarita" data={productDataMargaritas} />
    </Router>
  );
}

export default App;
