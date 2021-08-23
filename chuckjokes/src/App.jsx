import React, { useState, Fragment, useRef, useEffect } from 'react';
import './App.css';
import { RandomJoke } from './components/randomJoke/randomJoke';
import { TypeJoke } from './components/typeJoke/typeJoke';
import axios from 'axios';

function App() {
  const [jokes, setJokes ] = useState({
    joke: ''
  });
  const showJoke = (joke) =>{
    console.log(joke)
    setJokes({joke:joke})
  }
  const [categories,setCategories] = useState([]);
  useEffect(()=>{
      axios.get("https://api.chucknorris.io/jokes/categories").then(res=>{
         if(res.data){
             for(let item of res.data){
              setCategories(old=>[...old,{value:item}])
               }
          }
      })
  },[])

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <p>
          {jokes.joke}
          </p>
          <RandomJoke showJoke={showJoke}/>
          <TypeJoke categories={categories} showJoke={showJoke}/>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
