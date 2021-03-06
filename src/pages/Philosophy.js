import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from "../lib/Card";
import { SubjectButton } from "../lib/SubjectButton";

export const Philosophy = () => {
  const [result, setResult] = useState([]);
  
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:'philosophy'&langRestrict="fr"&key=${API_KEY}`;
 
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
      //console.log(data.items)
      setResult(data.items);
      })
      .catch((error) => console.log(error))
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <SubjectButton
          type="submit"
          title="Philosophy">
        </SubjectButton>
      </form>
      <div className="container-browse-result">
        {result.map(book => (
          <Link
            to={`/title/${book.id}`}
            key={book.id}>
            <Card
              thumbnail={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              authors={book.volumeInfo.authors}
              averageRating={book.volumeInfo.averageRating}
            />
          </Link>
        ))}  
      </div>
    </>
  )
};