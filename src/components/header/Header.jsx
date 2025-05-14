import React from "react";
import { navLinks } from "../../static/index";
import logo from "../../assets/Logo.svg";
import Person from "../../assets/Person.svg";
import Search from "../../assets/Search.svg";
import Shopping from "../../assets/Shopping.svg";
import "./Header.css";

const Header = () => {  
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav>
          <ul className="nav-list">
            {navLinks.map(link => (
              <li key={link.id}>
                <a href={link.link}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="icons">
          <img src={Search} alt="Search-icon" />
          <img src={Person} alt="KK" />
          <img src={Shopping} alt="Shopping-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
