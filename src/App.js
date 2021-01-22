import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ListsList } from "./components/ListsList";
import { BookDetails } from "./components/BookDetails";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { ForYou } from "./components/ForYou";
import { HomePage } from "./components/HomePage";
import { Logout } from "./components/Logout";

import { Routing } from "./components/Routing"

import { user } from "./reducers/user";

const reducer = combineReducers({ user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  )
}
