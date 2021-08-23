import React from 'react'
import './TypeJokeList.css'
import axios from 'axios';


export function TypeJokeList({item, onButtonClick}) {
    const getJoke = ()=>{
        axios.get("https://api.chucknorris.io/jokes/random?category="+item)
        .then(async response => {
            const data = await response.data.value;
            console.log(data)
            onButtonClick(data)
        })
    }
    return (
            <input className="style" type="button" onClick={getJoke} value={item}/>
    )
}
