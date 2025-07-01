import "./navbar.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h2>
        <NavLink to="/" className="nav-link" id="main">
          <span id="go">संत</span>&nbsp;
          <span id="cart">गणपतेश्वर बाबा</span>
        </NavLink>
      </h2>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul onClick={closeMenu}>
          <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/Activities" className="nav-link">Activities</NavLink></li>
          <li><NavLink to="/Events" end className="nav-link">Events</NavLink></li>
          <li><NavLink to="/Aarti" className="nav-link">Aarti</NavLink></li>
          <li><NavLink to="/Latest News" className="nav-link">Latest News</NavLink></li>
          <li><NavLink to="/Contact" end className="nav-link">Contact</NavLink></li>
          <li><NavLink to="/Register" className="nav-link">Register</NavLink></li>
        </ul>
        <div className="btn-nav">
          <button>Donate</button>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
