import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logout } from './Logout';

export const Nav = () => {
  return (
      <header>
      <nav>
        <h1 className="read-on-link">
          <NavLink to="/home">ReadOn</NavLink>
        </h1>
            <ul>
                <li>
                  <NavLink to="/favorites">Favorites</NavLink>
                </li>
                <li>
                  <NavLink to="/browse">Browse</NavLink>
                </li>
                <li>
                  <Logout />
                </li>
            </ul>
      </nav>
      </header>
    )
};