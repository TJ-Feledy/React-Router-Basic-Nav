import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
      <div className="App">
        <nav className='navBar'>
          <h1>React Router Mini</h1>
          <div className='navLinks'>
            <div>
            <Link className='link' to='/'>Home</Link>
            </div>
            <div>
            <Link className='link' to='/about'>About</Link>
            </div>
            <div>
              <Link className='link' to='/contact'>Contact</Link>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Navigation;
