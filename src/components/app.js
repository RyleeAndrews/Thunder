import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home/home.js';
import About from './about/about.js';
import Music from './music/music.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>


        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/music' component={Music} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
