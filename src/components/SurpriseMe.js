import React from 'react';


export const SurpriseMe = () => {

    const handleClick = (event) => {
        //randomising function goes here or 
    }
    return (
      <form>
        <button
          onClick={handleClick}
          type="submit">
          Surprise me!
          </button>
        </form>
    )
};