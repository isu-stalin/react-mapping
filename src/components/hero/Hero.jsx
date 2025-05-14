import React from "react";
import glImage from "../../assets/gl-watch.png";
import searchIc from "../../assets/search-ic.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>
            Discover <br />
            <span>Most Suitable</span> <br />
            Watches
          </h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on product
            quality. Here you can find smart watches of almost all brands. So why you are
            waiting? Just order now!
          </p>
          <form className="search-bar">
            <img src={searchIc} alt="" className="search-icon" />
            <input type="text" placeholder="Find the best brands" />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="hero-image">
          <img src={glImage} alt="Smart Watch" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
