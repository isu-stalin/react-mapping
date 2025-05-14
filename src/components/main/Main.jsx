import React from "react";
import { brandCards } from "../../static";
import "./Main.css";

const Main = () => {
  return (
    <section className="features">
      <div className="container cards">
        {brandCards.map(card => (
          <div className="card" key={card.id}>
            <img src={card.icon} className="icon" alt={card.title} />
            <div className="some-text">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Main;
