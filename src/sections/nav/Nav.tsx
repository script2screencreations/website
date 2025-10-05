import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">S2S Creations</div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/Projects">
          Projects
        </Link>
        <Link className="nav-link" to="/Team">
          Team
        </Link>
        <Link className="nav-link" to="/About Us">
          About
        </Link>
        <Link className="nav-link" to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
