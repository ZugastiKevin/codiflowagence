import React, { useContext } from 'react';
import 'sass/style.scss';
import { ThemeContext } from 'context/ThemeContext';
import { Link } from 'react-router-dom';
import work from 'data/work';

const Choice = () => {

  const {theme} = useContext(ThemeContext);

  return(
    <nav>
      <div className={theme ? 'style light' : 'style dark'}>
        <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
        <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
        <ul>
          {work.map((item, index) => {
            return <li key={index}>
              <Link to={`/works/${item.slug}`}>{item.name}</Link>
            </li>
          })}
        </ul>
      </div>
      <span className={theme ? 'style light footer' : 'style dark footer'}></span>
    </nav>
  )
};

export default Choice;