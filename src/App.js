import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { Routing } from "./components/Routing"
import { Card } from "./lib/Card";

import { user } from "./reducers/user";
import { favorite } from "./reducers/favorite";

const reducer = combineReducers({
  user: user.reducer,
  favorite: favorite.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  )
}
