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

export const Routing = () => {

    const accessToken = useSelector(store => store.user.login.accessToken);
  
  return (
 
    <BrowserRouter>
      <main>
        <Switch>
            {!accessToken && <Route path="/" exact component={Login} />}
            {accessToken && (
            <>                  
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
            </>    
            )}
        </Switch>
      </main>  
    </BrowserRouter>
  )
};