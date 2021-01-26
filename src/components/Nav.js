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