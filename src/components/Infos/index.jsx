import React, { useContext } from 'react';
import 'sass/centVh.scss';
import { ThemeContext } from 'context/ThemeContext';

const Infos = (props) => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'centVh light infos-center' : 'centVh dark infos-center'}>
      <p>{props.value.description}</p>
    </div>
  )
}

export default Infos;