import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}>
        Add 1
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Remove 1
      </button>
      <p>{counter}</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Update <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
