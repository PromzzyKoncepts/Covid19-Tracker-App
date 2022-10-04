import React from "react";
// import CoinContainer from "./CoinContainer";
import Slide from "./Slide";
import "./slide.css";
import Search from "./search";
import Apicontainer from "./ApiContainer";

const Home = () => (
  <div className="wrapper">
    <Slide />
    <Search />
    <Apicontainer />
  </div>
);

export default Home;
