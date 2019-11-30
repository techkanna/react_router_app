import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyles = {
    navStyle: {
      width: '100%',
      height: '7rem',
      backgroundColor: '#888',
      color: 'fff',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    color: {
      color: '#fff',
      textDecoration: 'none'
    },
    navLinks: {
      display: 'flex',
      width: '40%',
      fontSize: '1.5rem',
      fontWeight: '500',
      justifyContent: 'space-between',
      listStyle: 'none',
      cursor: 'pointer'
    }
  };
  return (
    <nav style={navStyles.navStyle}>
      <h1 style={navStyles.color}>logo</h1>
      <ul style={navStyles.navLinks}>
        <Link style={navStyles.color} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyles.color} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyles.color} to="/blogs">
          <li>Blogs</li>
        </Link>
        <Link style={navStyles.color} to="/profiles">
          <li>Profiles</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
