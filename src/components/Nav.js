import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logout } from './Logout';
import { nav } from './nav.css';

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
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
    )
};