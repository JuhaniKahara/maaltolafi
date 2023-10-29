import logo from './assets/maaltola.png';
import './App.css';
import * as React from 'react';

function FrontPage() {

  return (
    <div >
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        maaltolafi-verkkoportaali AVATTU!
      </p>
    </div>
  );
}

export default FrontPage;
