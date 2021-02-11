import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "@reduxjs/toolkit";

import { Routing } from "./components/Routing"
import { user } from "./reducers/user";
import { favorite } from "./reducers/favorite";

const reducer = combineReducers({
  user: user.reducer,
  favorite: favorite.reducer,
});

// Persistence: Tell the store to persist the state in localStorage after every action
// Retrieve the localstorage (if there is one, else use global initialState) and use it as our initial state
const persistedStateJSON = localStorage.getItem("reduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
};
  
// Create the store using the initial state, Checks for the devtools extension - if there, give access to browser.
const store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Store the state in localStorage on all redux state changes
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  )
};
