import React from "react";
import "./Header.css";

const Header = ({ onNavClick }) => {
  return (
    <header className="header">
      <div className="logo">J</div>
      <h1 className="title">JONATHAN LAPIAN</h1>
      <nav className="nav">
        <button onClick={() => onNavClick(0)} className="link">
          Home
        </button>
        <button onClick={() => onNavClick(1)} className="link">
          About
        </button>
        <button onClick={() => onNavClick(2)} className="link">
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
