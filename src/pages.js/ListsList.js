import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import { user } from "../reducers/user";
 
export const ListsList = () => {
    const history = useHistory();
    const accessToken = useSelector((store) => store.user.login.accessToken);
    const [list, setList] = useState([]);
    const [result, setResult] = useState([]);
  
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL_YOUNG = `https://www.googleapis.com/books/v1/volumes?q=subject:'juvenile+fiction'&langRestrict="fr"&key=${API_KEY}`;
  //const API_URL_ANT = `https://www.googleapis.com/books/v1/volumes?q=subject:'anthropology'&langRestrict="fr"&key=${API_KEY}`;
 
    //console.log(API_URL_ANT)
    //console.log(API_URL_YOUNG);

    const handleChange = (event) => {
        const list = event.target.value;
        setList(list); //state variable, from button
    };
   
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(API_URL_YOUNG)
            .then((res) => res.json())
            .then(data => {
                setResult(data.items);
            })
            .catch((error) => console.log(error))
    };
    
    useEffect(() => {
        if (!accessToken) {
          history.push("/")
        }
      }, [history, accessToken]);
    //map and output
    return (
        <>
        <h1>Lists</h1>
            <form onSubmit={handleSubmit}>
            <button
                type="submit" id="juvenile" onChange={handleChange}>
                    Young at Heart
            </button>
            <button
                type="submit" id="anthropology" onChange={handleChange}>
                    Anthropology
            </button>
            </form>
            <div className="card-wrap-outer">
            <div className="card-wrap-inner">

            {result.map(book => (
              <div className="card">
                <>
              <a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.previewLink} key={book.id} > 
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} key={book.id} />
                            <p>{book.volumeInfo.title}</p>
                            <p>{book.volumeInfo.authors}</p>
                </a>
                    </>
            </div>
            ))}     
            </div>
            </div>
        </>
    )
};