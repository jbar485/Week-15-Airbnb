import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
  return (
    <div>
      <h1>Airbnb</h1>
      <Link to="/">Home</Link> | <Link to="/stay">Stays</Link>
    </div>
  );
}

export default Header;