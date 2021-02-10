import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Browse } from "../pages/Browse";
import { BookDetails } from "../pages/BookDetails";
import { Nav } from "./Nav";
import { Footer } from "./Footer"
import { Login } from "../pages/Login";
import { Favorites } from "../pages/Favorites";
import { HomePage } from "../pages/HomePage";

export const Routing = () => {
  
  return (
    <BrowserRouter>
      <main>
        <>
          <Nav />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/lists" exact>
              <Browse />
            </Route>
            <Route path="/title/:bookId" exact>
              <BookDetails />
            </Route>
            <Route path="/browse" exact>
              <Browse />
            </Route>
            <Route path="/favorites" exact>
              <Favorites />
            </Route>
          </Switch>
          <Footer />
        </>    
      </main>  
    </BrowserRouter>
  )
};