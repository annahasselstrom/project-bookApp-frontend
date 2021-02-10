import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { favorite } from '../reducers/favorite';
import { Card } from 'lib/Card';

export const Favorites = ({ book }) => {
  const history = useHistory();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const allFavorites = useSelector((store) => store.favorite.list.items);
  const dispatch = useDispatch();
    
  const handleClick = (bookId) => {
    console.log('hello')
    dispatch(
      favorite.actions.deleteFavorite({
        id: bookId
      })
    );
  };
      
  const handleChange = () => {
    console.log('hello')
    dispatch(
      favorite.actions.clearAll()
    );
  };

  useEffect(() => {
    if (!accessToken) {
      history.push("/")
    }
  }, [history, accessToken]);
   
  return (
    <>
      <h1 className="favorites">Favorite Books</h1>
      <Link to={"/home"} className="back-link">
        <svg className="details-back-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#ffad4f" fillRule="evenodd"></path>alt="Go-back-button"</svg>
        <span className="details-text-arrow">{'back'}</span>
      </Link>
      <div className="container-browse-result">
        {allFavorites.map((item) => (
          <Card
            button onClick={handleClick}
            title={item.title}
            subtitle={item.subtitle}
            authors={item.authors}
            thumbnail={item.image}
            id={item.id}>
          </Card>
        ))}
      </div>
      {allFavorites.length > 0 &&
        <button
          className="clear-all-button"
          onClick={handleChange}>
          Clear all favorites
        </button>}
    </>
  )
};
