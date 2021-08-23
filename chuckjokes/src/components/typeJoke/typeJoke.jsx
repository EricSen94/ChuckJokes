import React, { useState, Fragment, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { TypeJokeList } from '../TypeJokeList/TypeJokeList'
import './TypeJoke.css'
import axios from 'axios';

export function TypeJoke({categories, onButtonClick}) {
    

    

      const getJoke = (cat) =>{
        console.log(cat)
      }
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


