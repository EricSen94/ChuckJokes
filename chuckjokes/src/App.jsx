import React, { useState, Fragment, useRef, useEffect } from 'react';
import './App.css';
import { RandomJoke } from './components/randomJoke/randomJoke';
import { TypeJoke } from './components/typeJoke/typeJoke';

function App() {
  const [jokes, setJokes ] = useState({
    joke: ''
  });
  const showJoke = (joke) =>{
    console.log(joke)
    setJokes({joke:joke})
  }
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <p>
          {jokes.joke}
          </p>
          <RandomJoke showJoke={showJoke}/>
          <TypeJoke/>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
