import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Home, About, Contact} from '../components';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <nav className='navBar'>
          <h1>React Router Mini</h1>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/about'>About</Link>
          </div>
          <div>
            <Link to='/contact'>Contact</Link>
          </div>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </div>
  );
};

export default Navigation;
