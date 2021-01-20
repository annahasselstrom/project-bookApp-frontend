import React from "react";

import { BookList } from "./components/BookList";
import { ListsList } from "./components/ListsList";
import { LandingPage } from "./components/LandingPage";
import { BookDetails } from "./components/BookDetails";

export const App = () => {
  return (
    <>
      <LandingPage />
      <BookList />
      <ListsList />
      <BookDetails />
      </>
  )
}
