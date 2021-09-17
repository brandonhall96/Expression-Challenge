import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import axios from 'axios';

const hitBackend = () => {
    axios.get('/test')
    .then((response) => {
    console.log(response.data)
    })
    }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <button onClick={hitBackend}>Send request</button>
        </a>
      </header>
    </div>
  );
}

export default App;

