import React, { useState, Fragment, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { TypeJokeList } from '../typeJokeList/typeJokeList'
import './typeJoke.css'
import axios from 'axios';

export function TypeJoke({categories, showJoke}) {
    

    

      const getJoke = (cat) =>{
        console.log(cat)
      }
    return (
        <Fragment>
            {
            categories.map((cat) =>
                <TypeJokeList item={cat.value} showJoke={showJoke} />
            )}
        </Fragment>
    )
}


