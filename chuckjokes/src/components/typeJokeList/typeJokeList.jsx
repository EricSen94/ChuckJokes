import React from 'react'
import './typeJokeList.css'

export function TypeJokeList({item, showJoke}) {
    const getJoke = ()=>{
        fetch("https://api.chucknorris.io/jokes/random?category={"+item+"}")
        .then(async response => {
            const data = await response.json();
            showJoke(data.value)
        })
    }
    return (
            <input className="style" type="button" onClick={getJoke} value={item}/>
    )
}
