import React from "react";
import "../App.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="navbar-container">
          <input type="checkbox" name="" id="checkbox" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>

          <ul class="menu-items">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sellers">Shop</a>
            </li>
            <li>
              <a href="#news">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div class="logo">
            <p>Shopping App</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
