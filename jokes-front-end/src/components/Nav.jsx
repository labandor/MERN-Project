import React from "react";
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="Nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/jokes">Jokes</NavLink>
      <NavLink to="/add-joke">Add New Joke</NavLink>
    </nav>
  );
}

export default Nav;
