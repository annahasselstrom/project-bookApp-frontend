import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Card } from "../lib/Card";
import { SubjectButton } from "../lib/SubjectButton";
 
export const Anthropology = () => {
  const [result, setResult] = useState([]);
  
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL_ANT = `https://www.googleapis.com/books/v1/volumes?q=subject:'anthropology'&langRestrict="fr"&max-results=40&key=${API_KEY}`;
 
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(API_URL_ANT)
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
        title="Anthropology">
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