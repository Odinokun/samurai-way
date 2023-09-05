import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img
          src='https://s3-eu-west-1.amazonaws.com/tpd/logos/5be01d787b5e5b0001ebb6bb/0x0.png'
          alt='logo'
        />
      </header>
      <nav className='nav'>
        <div>
          <a href='/'>Profile</a>
        </div>
        <div>
          <a href='/'>Messages</a>
        </div>
        <div>
          <a href='/'>News</a>
        </div>
        <div>
          <a href='/'>Music</a>
        </div>
        <div>
          <a href='/'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div className='banner'>
          <img
            src='https://images.unsplash.com/photo-1552288092-76e7d732366c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2771&q=80'
            alt='img'
          />
        </div>
        <div>ava + descr</div>
        <div>
          my posts
          <div>new post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
