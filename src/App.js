import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <div className='componentDisplay'>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </div>
  </div>
);

export default App;
