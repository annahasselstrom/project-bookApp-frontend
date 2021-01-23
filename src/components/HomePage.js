import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { user } from "../reducers/user";



// base
//const API_URL = `https://www.googleapis.com/books/v1/volumes?q="${inputValue}"&langRestrict=us&key=${API_KEY}`;

// potter

// harry potter
//const API_URL = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${API_KEY}`;

//langRestrict, intitle and inauthor
//const API_URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:'harry+potter'+inauthor:anna&langRestrict='fr'&key=${API_KEY}`;

// subject
//const API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:'juvenile+fiction'&langRestrict="fr"&key=${API_KEY}`;

// order by - newest or relevance

// specific volume using volumeId
//const API_URL = `https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=${API_KEY}`;


export const HomePage = () => {
    const [book, setBook] = useState('');
    const [result, setResult] = useState([]);
    const dispatch = useDispatch();


    const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${API_KEY}`;
   //console.log(API_URL)
    
    const handleChange = (event) => {
        const book = event.target.value;
        setBook(book); //state variable, from input field
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                //console.log(data.items)
                setResult(data.items);
    })
            
    };
    {/*}
    const handleLogout = (event) => {
        event.preventDefault();
    
        dispatch(user.actions.logout());
        dispatch(user.actions.setStatusMessage({ statusMessage: "Logged out!" }));
      };
    */}
    return (
        <>
            {/*}
            <button type="submit" onClick={handleLogout}>
                Logout
        </button>
    */}
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Search for Books"
                id="book">
            </input>
            <button
                type="submit">
                    Search
            </button>
            </form>
            {result.map(book => (
                <>
                    <Link to={`/title/${book.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={book.volumeInfo.previewLink}
                        key={book.id}>
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                            key={book.id} />
                        <p>{book.volumeInfo.title}</p>
                        <p>{book.volumeInfo.authors}</p>
                        <p>{book.volumeInfo.averageRating}</p>
                    </Link>
                </>
            ))}        
    </>
    );
};


