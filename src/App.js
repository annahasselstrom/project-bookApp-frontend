import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";


import { ListsList } from "./components/ListsList";
import { HomePage } from "./components/HomePage";
import { BookDetails } from "./components/BookDetails";
import { Login } from "./components/Login";
import { user } from "./reducers/user";

const reducer = combineReducers({ user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <>
      <Provider store={store}>
      <main>
        <Login />
      </main>
      <ListsList />
        <BookDetails />
      </Provider>

      </>
  )
}
