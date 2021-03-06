import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { DetailsCard } from "../lib/DetailsCard";
import { favorite } from '../reducers/favorite';

export const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [image, setImage] = useState();

  // Here we store the books in favorite list.
  const favoriteBooks = useSelector((store) => store.favorite.list.items)
  const dispatch = useDispatch();

  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";

  const handleClick = (isFavorite) => {
    //console.log(isFavorite)
    // if isFavorite, the Remove-button has been rendered (and clicked) and we dispatch a 
    // delete Favorite on click. 
    // Else, the Add - button was rendered and we dispatch an add action.
    if (isFavorite) {
      dispatch(
        favorite.actions.deleteFavorite({
          title: book.title,
          subtitle: book.subtitle,
          authors: book.authors,
          image: book.imageLinks.thumbnail,
          id: bookId
        })
      )
    } else {
      dispatch(
        favorite.actions.addFavorite({
          title: book.title,
          subtitle: book.subtitle,
          authors: book.authors,
          image: book.imageLinks.thumbnail,
          id: bookId
        })
      )
    };
  };

  // Here we get the book details using useParams.
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json.volumeInfo)
        setBook(json.volumeInfo)
        setImage(json.volumeInfo.imageLinks.thumbnail)
      })
      .catch((error) => console.log(error))
  }, [bookId]); 

  // Here we check if this book is on the favorite list. I.e the items we are storing in favoriteBooks. 
  // True or false because of !! - variable turned into boolean. The true or false value is 
  // later passed as an argument in the handleClick function and dispatch.
  // Depending on true or false, the handleClick function dispatches either a remove or 
  // add action.
  // The true or false value is also passed as a boolean to the Card component to toggle
  // the remove/add button on the book-details-details-page.
  const isFavorite = !!favoriteBooks.find(item => item.id === bookId);

  const styleObj = {
    width: 30,
    height: 30
  };

  return (
    <>
      <h1 className="book-details">Book Info</h1>
      <Link to={"/lists"} className="back-link">
        <svg className="details-back-arrow" xmlns="http://www.w3.org/2000/svg" style={styleObj} viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#FFAD4F" fillRule="evenodd"></path>alt="Go-back-button"</svg>
        <span className="details-text-arrow">{'back'}</span>
      </Link>
      {book && <DetailsCard
        thumbnail={image}

        // Stores the true or false value from the variable on line 63.
        isFavorite={isFavorite}
        title={book.title}
        subtitle={book.subtitle}
        authors={book.authors}
        averageRating={book.averageRating}
        description={book.description && book.description.replace(/<\/?[^>]+>/gi, '')}
        // Toggles Add/Remove button depending on wether the book is on fav list or not.
        onFavoriteToggle={handleClick}
      />}
    </>   
  )
};

