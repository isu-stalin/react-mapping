import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Product from "./components/product/Product";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Product/>
    </>
  );
};

export default App;
