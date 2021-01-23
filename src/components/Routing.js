import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ListsList } from "./ListsList";
import { BookDetails } from "./BookDetails";
import { Nav } from "./Nav";
import { Footer } from "./Footer"
import { Login } from "./Login";
import { ForYou } from "./ForYou";
import { HomePage } from "./HomePage";
import { Logout } from "./Logout";
import { SurpriseMe } from "./SurpriseMe";

export const Routing = () => {

    const accessToken = useSelector(store => store.user.login.accessToken);
  
  return (
 
    <BrowserRouter>
      <main>
        {/*}
        {!accessToken && <Route path="/" exact component={Login} />}
  {accessToken && ( */}
        <>                  
          <Nav />
          <HomePage />
          <SurpriseMe />
            <Switch>
              <Route path="/logout" exact>
                <Logout />
              </Route>
              <Route path="/lists" exact>
                <ListsList />
              </Route>
              <Route path="/title/:bookId" exact>
                <BookDetails />
              </Route>
              <Route path="/foryou" exact>
                <ForYou />
              </Route>
            </Switch>
          <Footer />
            </>    
        {/*})}*/}
      </main>  
    </BrowserRouter>
  )
};