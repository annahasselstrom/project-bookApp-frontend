import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { nav } from './nav.css';
import { Logout } from './Logout';

export const Nav = () => {
    return (
        <nav>
            <h3>
                <Link to="/home">My Book App</Link>
            </h3>
            <ul>
                <li>
                 <NavLink to="/foryou">For you</NavLink>
                </li>
                <li>
                  <NavLink to="/lists">Lists</NavLink>
                </li>
                <li>
                  <Logout />
                </li>
            </ul>
        </nav>
    )
};