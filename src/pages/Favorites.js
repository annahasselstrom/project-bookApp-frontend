import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { favorite } from '../reducers/favorite';
import { Card } from 'lib/Card';
import { Nav } from "../components/Nav";



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
        <>

        <h1 className="favorite">Favorite Books</h1>
        <Card
            title="Really? Not even one favorite book?"
        />
        </>
        
    
    
        
        // delete-button - handle deleteBook
        // back-button
    )
    
}
