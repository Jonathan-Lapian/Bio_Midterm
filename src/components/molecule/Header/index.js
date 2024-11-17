import React from "react";
import "./Header.css";

const Header = ({ onNavClick }) => {
  return (
    <header className="header">
      <div className="logo">J</div>
      <h1 className="title">JONATHAN LAPIAN</h1>
      <nav className="nav">
        <button onClick={() => onNavClick(0)} className="nav_link">
          HOME
        </button>
        <button onClick={() => onNavClick(1)} className="nav_link">
          ABOUT
        </button>
        <button onClick={() => onNavClick(2)} className="nav_link">
          CONTACT
        </button>
      </nav>
    </header>
  );
};

export default Header;
