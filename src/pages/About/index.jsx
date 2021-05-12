import React, { useContext } from 'react';
import 'sass/centVh.scss';
import { ThemeContext } from 'context/ThemeContext';

const About = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme ? 'centVh light' : 'centVh dark'}>
      <h3>Websitic est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.</h3>
      <p>De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.  
        Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.
      </p>
    </div>
  )
};

export default About;