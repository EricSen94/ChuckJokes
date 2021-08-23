import React, { Fragment } from 'react';
import { CategoryJokeList } from './CategoryJokeList'
import './CategoryJoke.css'

export function CategoryJoke({categories, onButtonClick}) {

    return (
        <Fragment>
            <div>
                <p>Categories</p>
                {
                categories.map((cat) =>
                    <CategoryJokeList item={cat.value} onButtonClick={onButtonClick} />
                )}
            </div>
        </Fragment>
    )
}


