import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { nav } from './nav.css';

export const Nav = () => {
    return (
        <nav>
            <h1>
                <Link to="/home">My Book App</Link>

            </h1>

            <ul>
                <li>
                 <NavLink to="/foryou">For you</NavLink>
                </li>
                <li>
                  <NavLink to="/lists">Lists</NavLink>
                </li>
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
          </ul>
        </nav>
    )
};