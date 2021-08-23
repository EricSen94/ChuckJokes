import React, { useState, Fragment, useEffect } from 'react';
import './App.css';
import { CategoryJoke, RandomJoke} from './components';
import axios from 'axios';

function App() {
  const [jokes, setJokes ] = useState({
    joke: 'Select a category for a great joke, o just a random with the buttons.'
  });
  const onButtonClick = (joke) =>{
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
          <div className="jokeDiv">
            <p className="joke">
            {jokes.joke}
            </p>
          </div>
          <RandomJoke onButtonClick={onButtonClick}/>
          <CategoryJoke categories={categories} onButtonClick={onButtonClick}/>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
