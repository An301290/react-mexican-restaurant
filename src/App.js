import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import {
  productDataTaco,
  productDataMargaritas,
} from "./components/Products/data";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite Taco" data={productDataTaco} />
      <Feature />
      <Products heading="Choose your Margarita" data={productDataMargaritas} />
      <Footer />
    </Router>
  );
}

export default App;
