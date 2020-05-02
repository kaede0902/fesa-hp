import React from 'react';
import logo from './fesa-logo-name.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Directed by Fukuda Ryoichi</p>
      </header>
    </div>
  );
}

export default App;
