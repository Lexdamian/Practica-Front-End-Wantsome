import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Img1 from './components/Images/img1';

function App() {
  return (
    <div className="App">
      <Header head='This is a header'/>
      <Img1 url="https://miro.medium.com/max/6054/0*kp8rJzqHjagMj22J" alt='airplane' />


      {/* <header className="App-header">
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
        </a>
      </header> */}
    </div>
  );
}

export default App;
