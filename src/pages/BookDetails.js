import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card } from "../lib/Card";
import { ShowMoreText } from 'react-show-more-text';
export const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  //const FAV_URL = `http://localhost:8080/favorites/${bookId}`;

    useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`)
    
      .then((res) => res.json())
      .then((json) => {
        //console.log(json.volumeInfo)
        setBook(json.volumeInfo)
        //console.log(json.volumeInfo.description.replace(/<\/?[^>]+>/gi, ''))
        //setDescription(json.volumeInfo.description)
      })
      .catch((error) => console.log(error))
  }, [bookId]);  

  
    return (
    <>
      <h1>Book Details</h1>
      <Link to={"/home"} className="back-link">
        <svg className="details-back-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path>alt="Go-back-button"</svg>
        <span className="details-text-arrow">{'Back'}</span>
      </Link>
        
      <button
        type='submit'
        aria-label='labelAddButton'
        value={bookId}>
        Add
      </button>
        {book && <Card
          /*thumbnail={book.imageLinks.thumbnail}*/
          title={book.title}
          subtitle={book.subtitle}
          authors={book.authors}
          averageRating={book.averageRating}
          description={book.description && book.description.replace(/<\/?[^>]+>/gi, '')}
        />}
   </>   
  )
};
