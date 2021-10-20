import React from 'react';

import '../styles/App.css';
import Header from './Header';

import LoginModal from './LoginModal';

function App() {
  const loggedIn = false;

  return <div className="App">{loggedIn ? <Header /> : <LoginModal />}</div>;
}

export default App;
