import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import { Card } from "../lib/Card";

//import { user } from "../reducers/user";
 
export const SurpriseMe = () => {
  const [book, setBook] = useState();
  //const [item, setItem] = useState({})
  
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:'design'&langRestrict="fr"&max-results=50&key=${API_KEY}`;
 
  console.log(API_URL)
  //console.log(API_URL_ANT)
  /*
    const handleChange = (event) => {
      const randomBook = event.target.value;
      //setRandomBook(randomBook); //state variable, from button
    };
    */
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setBook(data.items[Math.floor(Math.random() * data.items.length)].volumeInfo)
      })
      .catch((error) => console.log(error))
  };
  
  console.log(book);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button className="surprise-button"
          onChange
          type="submit">
          Surprise Me!
      </button>
      </form>
      
      {/*<Link to={`/title/${book.id}`}>*/}

      {book && <Card
        
        thumbnail={book && book.imageLinks.thumbnail}
        title={book && book.title}
        subtitle={book && book.subtitle}
        authors={book && book.authors}
        averageRating={book && book.averageRating}
        />}
        {/*</Link>*/}
          </>
    )
};
