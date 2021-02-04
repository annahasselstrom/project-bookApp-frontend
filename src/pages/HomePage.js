import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { SurpriseMe } from "../components/SurpriseMe";
import { Card } from "../lib/Card";
import { Browse } from "./Browse";
import { Nav } from "../components/Nav";

// base
//const API_URL = `https://www.googleapis.com/books/v1/volumes?q="${inputValue}"&langRestrict=us&key=${API_KEY}`;

// harry potter
//const API_URL = `https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${API_KEY}`;

//langRestrict, intitle and inauthor
//const API_URL = `https://www.googleapis.com/books/v1/volumes?q=intitle:'harry+potter'+inauthor:anna&langRestrict='fr'&key=${API_KEY}`;

// order by - newest or relevance

export const HomePage = () => {
  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);

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
        // console.log(data.items)
        setResult(data.items);
        })
        .catch((error) => console.log(error))
    };

  {/*}
  useEffect(() => {
      if (!accessToken) {
        history.push("/home")
      }
    }, [history, accessToken]);
  */}

    return (
      <>
        <section className="main-container">
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Search for Books"
                id="book">
            </input>
            <button className="search-button"
                type="submit">
                    Search
            </button>
            </form >
          <SurpriseMe />
        </section>
            <section>
              <div>
            {result.map(book => (
              <>
                <div>
                    <Link to={`/title/${book.id}`}
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
                
                </div>
                    <Card 
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                    />
                </>
                ))}  
          </div>
          <Browse />
        </section>
        </>
    );
};


