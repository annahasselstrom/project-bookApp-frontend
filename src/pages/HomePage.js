import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { SurpriseMe } from "../components/SurpriseMe";
import { Card } from "../lib/Card";
import { Browse } from "./Browse";

export const HomePage = () => {
  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${API_KEY}`;
    
  const handleChange = (event) => {
    const book = event.target.value;
    setBook(book); //state variable, from input field
  };

  const handleSubmit = (event) => {
    event.preventDefault();

      fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
        // console.log(data.items)
        setResult(data.items);
        })
        .catch((error) => console.log(error))
  };

  useEffect(() => {
    if (!accessToken) {
      history.push("/")
    }
  }, [history, accessToken]);
  
  return (
    <>
      <section className="main-container">
        <form onSubmit={handleSubmit}>
          <input className="search-input"
            htmlFor="search"
            type="text"
            onChange={handleChange}
            placeholder="Search for Books"
            id="book">
          </input>
          <button
            className="search-button"
            type="submit">
            Search
          </button>
        </form >
        <SurpriseMe />
      </section>
      <section className="container-browse-result">
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
      </section>
      <section>
        <Browse />
      </section>
    </>
  );
};


