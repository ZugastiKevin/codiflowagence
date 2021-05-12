import React, { useContext } from 'react';
import 'sass/style.scss';
import { ThemeContext } from 'context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {theme} = useContext(ThemeContext);

  return(
    <div className={theme ? 'style light' : 'style dark'}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};

export default Navbar;