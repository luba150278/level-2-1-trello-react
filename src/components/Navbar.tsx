import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper teal teal darken-1 px1 container">
      <NavLink to="/" className="brand-logo">
        Trello project
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li key="1">
          <NavLink to="/">Home</NavLink>
        </li>
        <li key="2">
          <NavLink to="/board">Board</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
