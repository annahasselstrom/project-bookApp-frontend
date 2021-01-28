import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Browse } from "../pages.js/Browse";
import { BookDetails } from "../pages.js/BookDetails";
import { Nav } from "./Nav";
import { Footer } from "./Footer"
import { Login } from "../pages.js/Login";
//import { Favorites } from "../pages.js/Favorites";
import { HomePage } from "../pages.js/HomePage";

//import { Logout } from "./Logout";
//import { SurpriseMe } from "./SurpriseMe";

export const Routing = () => {
  const accessToken = useSelector(store => store.user.login.accessToken);
  
  return (
    <BrowserRouter>
      <main>
        <>
          <Nav />
          {/*<SurpriseMe />*/}
          <Switch>
            {/*}
            <Route path="/" exact component={Login} />
  */}
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
            {/*
            <Route path="/favorites" exact>
              <Favorites />
            </Route>
             */}
          </Switch>
          <Footer />
            </>    
      </main>  
    </BrowserRouter>
  )
};