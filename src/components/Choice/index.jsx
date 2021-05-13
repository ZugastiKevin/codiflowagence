import React, { useContext, useState } from 'react';
import 'sass/style.scss';
import { ThemeContext } from 'context/ThemeContext';
import { Link } from 'react-router-dom';
import work from 'data/work';

const Choice = () => {
  const [ifClicked, setIfClicked] = useState(true)
  const {theme} = useContext(ThemeContext);

  const handleClick = () => {
    setIfClicked(false)
  }

  return(
    <nav>
      <div className={theme ? 'style light' : 'style dark'}>
        <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
        <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
        <div className='card'>
          {work.map((item, index) => {
            return <div className='card-body' key={index}>
              <div className='module'>
                <Link className='card-link' to={`/works/${item.slug}`} onClick={handleClick}>{item.name}</Link>
                <div>{item.title}</div>
              </div>
            </div>
          })}
        </div>
      </div>
      <span className={theme ? `style light ${ifClicked ? 'footer' : 'footer-clicked'}` : `style dark ${ifClicked ? 'footer' : 'footer-clicked'}`}></span>
    </nav>
  )
};

export default Choice;