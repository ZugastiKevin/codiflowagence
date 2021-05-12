import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Project from 'components/Project';
import Choice from 'components/Choice';


const Works = () => {
  return(
    <Router>
      <Choice />
      <main>
        <Switch>
          <Route path="/works/:workSlug">
            <Project />
          </Route>
        </Switch>
      </main>
    </Router>
  )
};
export default Works;