import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { favorite } from '../reducers/favorite';


export const Favorites = () => {
    const history = useHistory();
    const accessToken = useSelector((store) => store.user.login.accessToken);
    const allFavorites = useSelector((store) => store.favorite.favoriteBook);
 
    
    // set state

    // handle deleteBook
    // dispatch action

    {/*
    useEffect(() => {
        if (!accessToken) {
          history.push("/")
        }
    }, [history, accessToken]);
   
    */}

    return (
        <h1>For you</h1>
        
    
    
        
        // delete-button - handle deleteBook
        // back-button
    )
    
}
