import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const BookDetails = () => {
    const { bookId } = useParams();
    //console.log(params);
    const [book, setBook] = useState({});
    

    const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";

    //onst API_URL = `https://www.googleapis.com/books/v1/volumes/${book.id}?key=${API_KEY}`;

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json.volumeInfo);
            setBook(json.volumeInfo)})
    }, [bookId])
    return (
        <>
            <h1>Testing</h1>
            <p>{book.title} {book.subtitle}</p>
            <p>{book.author}</p>
            <p>{book.averageRating}</p>
            <p>{book.description}</p>
            
            <img src={book.imageLinks} alt={book.title} />
            
        </>
    )
};

