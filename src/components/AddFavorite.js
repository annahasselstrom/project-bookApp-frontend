import React, { useState } from 'react';

export const AddFavorite = () => {
  const [favorite, setFavorite] = useState([]);
    // set state delete


  const FAV_URL = "";
  
            fetch(FAV_URL, {
              method: "PATCH",
              body: JSON.stringify({ favorites }),
              headers: { "Content-Type": "application/json" },
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Could not add to favorite. Please try again."); // throw redirects us to .catch
                }
                return res.json();
              })
                .then((json) => console.log(json))
                
            {/*}
              .catch((err) => handleLoginFailed(err))
              .finally(() => {
                setName("");
                setPassword("");
              });
            */}
          };

    };

    const handleDeleteBook = () => {

        // dispatch action

    };


    // POST request to add to db

    // DELETE request to remove from db

return (
      <button>Add fav</button>
    // delete book - handle deleteBook
    )
};
