import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from "../lib/Card";

export const SurpriseMe = () => {
  const [book, setBook] = useState();
  
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:'design'&langRestrict="fr"&max-results=50&key=${API_KEY}`;
 
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setBook(data.items[Math.floor(Math.random() * data.items.length)])
      })
      .catch((error) => console.log(error))
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button className="surprise-button"
          onChange
          type="submit">
          Surprise Me!
        </button>
      </form>
      <section className="outer-container-surprise-card">
        {book && <Link to={`/title/${book.id}`}>
          {book && <Card
            thumbnail={book && book.volumeInfo.imageLinks.thumbnail}
            title={book && book.volumeInfo.title}
            subtitle={book && book.volumeInfo.subtitle}
            authors={book && book.volumeInfo.authors}
            averageRating={book && book.volumeInfo.averageRating}
          />}
        </Link>}
      </section>
    </>
  )
};
