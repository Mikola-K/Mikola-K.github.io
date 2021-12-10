import React from "react";
import './navbar.css'
import {Link} from "react-router-dom"
function Nav() {
    return (
      <div id="navbar">
        <nav className="nav">
          <span className="logo">Cars?</span>
          <ul className="navlist">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <hr className="hr_nav" />
      </div>
    );
}

export default Nav
