import React from 'react';
import { Link } from 'react-router-dom';

import { Logout } from './Logout';

export const Footer = () => {
    return (
      <footer>
      <p tabindex="0" className="heading">CONTACT</p>
      <p tabindex="0" className="contact-info">Anna Hasselström</p>
      <p tabindex="0" className="contact-info"> + 46 70 544 10 14</p>
      <p tabindex="0" className="contact-info">hasselstromanna@me.com</p>
      </footer>
    )
}
