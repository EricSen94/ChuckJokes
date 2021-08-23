import React, { Fragment } from 'react';
import { TypeJokeList } from '../TypeJokeList/TypeJokeList'
import './TypeJoke.css'

export function TypeJoke({categories, onButtonClick}) {
    return (
        <Fragment>
            <div>
                <p>Categories</p>
                {
                categories.map((cat) =>
                    <TypeJokeList item={cat.value} onButtonClick={onButtonClick} />
                )}
            </div>
        </Fragment>
    )
}


