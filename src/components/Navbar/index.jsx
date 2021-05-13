import React, { useContext } from 'react';
import './NavBar.scss';
import { ThemeContext } from 'context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {theme} = useContext(ThemeContext);

  return(
    <div className={theme ? 'navbar light' : 'navbar dark'}>
      <nav className={theme ? 'navbar light sidenav' : 'navbar dark sidenav'}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
      </nav>
    </div>
  )
};

export default Navbar;