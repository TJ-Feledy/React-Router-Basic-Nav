import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Home, About, Contact} from '../Components';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <nav className='navBar'>
          <h1>React Router Mini</h1>
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">About</a>
          </div>
          <div>
            <a href="">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
