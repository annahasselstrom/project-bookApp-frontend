import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

//import { user } from "../reducers/user";
 
export const SurpriseMe = () => {
  const [result, setResult] = useState([]);
  const [item, setItem] = useState({})
  
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const API_URL_ANT = `https://www.googleapis.com/books/v1/volumes?q=subject:'art'&langRestrict="fr"&key=${API_KEY}`;
 
  //console.log(API_URL_ANT)
  //console.log(API_URL_YOUNG);

  const handleChange = (event) => {
    const randomBook = event.target.value;
    //setRandomBook(randomBook); //state variable, from button
  };
   
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(API_URL_ANT)
      .then((res) => res.json())
      .then(data => {
        //console.log(data.items)
        setResult(data.items)
      })
      .catch((error) => console.log(error))
  }; 
    
  const randomResult = () => {
    return result[Math.floor(Math.random() * result.length)]
  };

  console.log(randomResult());
  //const randomBook = randomResult();

  return (
    <>
      <form onSubmit={handleSubmit}>
      <button
        onChange={handleChange}
        type="submit">
        Surprise me!
      </button>
      </form>
      <div>Surprise book should be here!
        <div>
        {Object.entries(randomResult).map((entry) =>
        <p>{entry[4]} : {entry[0[0]]}</p>
          )}
          </div>
      </div>
      </>
    )
};

/*
{Object.entries(randomResult).map((entry) =>
      <p>{entry[0]} : {entry[1]}</p>
  )}
  */