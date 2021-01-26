import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { SurpriseMe } from "../components/SurpriseMe";

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
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);

    //const dispatch = useDispatch();

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
            .catch((error) => console.log(error))
    };
  
    useEffect(() => {
      if (!accessToken) {
        history.push("/")
      }
    }, [history, accessToken]);

    return (
        <>
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
            </form >
            <SurpriseMe />

            <section className="card-wrap-outer">
              <div className="card-wrap-inner">
                {result.map(book => (
                <div className="card">
                    <Link to={`/title/${book.id}`}
                        key={book.id}>
                        <img
                            src={book.volumeInfo.imageLinks.thumbnail}
                            alt={book.volumeInfo.title}
                            key={book.id} />
                        <p>{book.volumeInfo.title}</p>
                            <p>{book.volumeInfo.authors}</p>
                    </Link>
                        {/*<p>Rating {book.volumeInfo.averageRating}</p>*/}
                        <div className="container-favorite-button">
                            <button className="favorite-button">
                              <span className="heart" role="img" aria-label="Heart">
                                    +
                              </span>
                              </button>
                        </div>
                </div>    
                ))}   
              </div>
            </section>

            <section className="list-container">
                <section className="card-wrap-outer">
                    <div className="card-wrap-inner">
                      <div className="list-card">
                        <p>List 1</p>
                      </div>
                    </div>
                </section>
                    
                <section className="card-wrap-outer">
                    <div className="card-wrap-inner">
                      <div className="list-card">
                        <p>List 2</p>
                      </div>
                    </div>
                </section>
                        
                <section className="card-wrap-outer">
                    <div className="card-wrap-inner">
                      <div className="list-card">
                        <p>List 3</p>
                      </div>
                    </div>
                </section>

                <section className="card-wrap-outer">
                    <div className="card-wrap-inner">
                      <div className="list-card">
                        <p>List 4</p>
                      </div>
                    </div>
                </section>
        </section>
        </>
    );
};


