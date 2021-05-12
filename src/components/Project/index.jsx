import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext  } from "react";
import work from 'data/work';
import Infos from 'components/Infos';
import { ThemeContext } from 'context/ThemeContext';
import 'sass/style.scss';

const Project = () => {
  const { workSlug } = useParams();
  const [currentWorks, setCurrentWorks] = useState(undefined)
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    const foundWorks = work.find((works) => works.slug === workSlug);
    setCurrentWorks(foundWorks);
  }, [workSlug], [])

  return(
    <div className={theme ? 'style light' : 'style dark'}>
      {currentWorks !== undefined ? <Infos value={currentWorks} /> : <p>error</p>}
    </div>
  )

}

export default Project;