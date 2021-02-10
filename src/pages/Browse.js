import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { Anthropology } from "./Anthropology";
import { Philosophy } from "./Philosophy";
import { Arts } from "./Arts";
import { Photography } from "./Photography";
import { Design } from "./Design";
import { Architecture } from "./Architecture";

export const Browse = () => {
  //const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const history = useHistory();

  useEffect(() => {
    if (!accessToken) {
      history.push("/")
    }
    }, [history, accessToken]);

  return (
    <>
      <h1 className="browse">Browse subjects</h1>
      <section className="outer-container">
        <Anthropology />
        <Philosophy />
        <Architecture />
        <Photography />
        <Arts />
        <Design />
      </section>
    </>
  )
};
