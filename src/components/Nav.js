import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <h1>My Life</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Nav;
