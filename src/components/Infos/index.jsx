import React, { useContext } from 'react';
import 'sass/style.scss';
import { ThemeContext } from 'context/ThemeContext';

const Infos = (props) => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'style light' : 'style dark'}>
      <h3>{props.value.title}</h3>
      <p>{props.value.description}</p>
    </div>
  )
}

export default Infos;