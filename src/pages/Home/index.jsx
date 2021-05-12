import React, { useContext } from 'react';
import 'sass/centVh.scss';
import { ThemeContext } from 'context/ThemeContext';

const Home = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'centVh light' : 'centVh dark'}>
      <h3>Confiez vos rêves à des experts du Web</h3>
      <p>Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.  
        Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
      </p>
    </div>
  )
};

export default Home;