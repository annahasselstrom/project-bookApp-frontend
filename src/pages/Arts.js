import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Card } from "../lib/Card";
import { SubjectButton } from "../lib/SubjectButton";

 
export const Arts = () => {
    const history = useHistory();
    const accessToken = useSelector((store) => store.user.login.accessToken);
    const [list, setList] = useState([]);
    const [result, setResult] = useState([]);
  
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=subject:'art'&langRestrict="fr"&key=${API_KEY}`;
 
    const handleChange = (event) => {
        const list = event.target.value;
      setList(list); //state variable, from button
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
    
  /*
    useEffect(() => {
        if (!accessToken) {
          history.push("/")
        }
    }, [history, accessToken]);
  */
  
    //map and output
    return (
        <>
            <form onSubmit={handleSubmit}>
            <SubjectButton
                type="submit" onChange={handleChange}
                title="Arts">
            </SubjectButton>
        </form>
        
        <div className="container-browse-result">

            {result.map(book => (
              <>
                <Link to={`/title/${book.id}`}
                        key={book.id}>
                  <a key={book.id}> 
                    <Card

                      thumbnail={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      authors={book.volumeInfo.authors}
                      averageRating={book.volumeInfo.averageRating}
                    />
                  </a>
                  </Link>
                    </>
            ))}  
          </div>
        </>
    )
};