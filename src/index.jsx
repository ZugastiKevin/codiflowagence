import React from 'react';
import ReactDOM from 'react-dom';
import 'sass/style.scss';
import ThemeContextProvider from 'context/ThemeContext';
import BtnToggle from 'components/BtnToggle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import Navbar from 'components/Navbar';

const App = () => {
  return (
    <ThemeContextProvider>
      <BtnToggle />
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
          </Switch>
        </main>
      </Router>
    </ThemeContextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));