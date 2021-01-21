import React, { useState } from 'react';

export const ListsList = () => {
  const [list, setList] = useState([]);
  const [result, setResult] = useState([]);
  
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL_YOUNG = `https://www.googleapis.com/books/v1/volumes?q=subject:'juvenile+fiction'&langRestrict="fr"&key=${API_KEY}`;
  const API_URL_ANT = `https://www.googleapis.com/books/v1/volumes?q=subject:'anthropology'&langRestrict="fr"&key=${API_KEY}`;
 
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
    }; 
    
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
            {result.map(book => (
                <>
              <p>{book.volumeInfo.title}</p>
              <a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.previewLink} key={book.id} > 
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} key={book.id} />
                </a>
                </>
            ))}        
        </>
    )
};