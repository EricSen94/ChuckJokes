import React from 'react'
import './randomJoke.css'
import axios from 'axios';

export function RandomJoke({showJoke}) {
    const getJoke = () =>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(async response => {
            const data = await response.json();
            showJoke(data.value)
        })
    }
    return (
        <div>
            <button className="style" onClick={getJoke}>Random Joke</button>
        </div>
    )
}
