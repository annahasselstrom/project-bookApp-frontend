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

import { user } from "./reducers/user";

const reducer = combineReducers({ user: user.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <><BrowserRouter>
      <Provider store={store}>
        <main>
          <Switch>
            <Route path="/" exact component={Login} />
            <div>
              <Nav />
                <Route path="/logout" exact>
                  <Logout />
                </Route>
                <Route path="/home" exact>
                  <HomePage />
                </Route>
                <Route path="/lists" exact>
                  <ListsList />
                </Route>
                <Route path="bookdetails" exact>
                  <BookDetails />
                </Route>
                <Route path="/foryou" exact>
                  <ForYou />
                </Route>
              <Footer />
            </div>
          </Switch>

          </main>
      </Provider>
    </BrowserRouter>

      </>
  )
}
