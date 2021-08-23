import React from 'react'
import './typeJokeList.css'
import axios from 'axios';


export function TypeJokeList({item, showJoke}) {
    const getJoke = ()=>{
        axios.get("https://api.chucknorris.io/jokes/random?category="+item)
        .then(async response => {
            const data = await response.data.value;
            console.log(data)
            showJoke(data)
        })
    }
    return (
            <input className="style" type="button" onClick={getJoke} value={item}/>
    )
}
