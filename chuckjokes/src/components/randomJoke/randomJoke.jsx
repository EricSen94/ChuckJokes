import React from 'react'
import './randomJoke.css'
import axios from 'axios';

export function RandomJoke({showJoke}) {
    const getJoke = () =>{
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(async response => {
            const data = await response.data;
            showJoke(data.value)
        })
    }
    return (
        <div>
            <button className="styleRandom" onClick={getJoke}>Random Joke</button>
        </div>
    )
}
