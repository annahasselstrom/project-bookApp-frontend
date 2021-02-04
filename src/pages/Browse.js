import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import { Anthropology } from "./Anthropology";
import { Philosophy } from "./Philosophy";
import { Arts } from "./Arts";
import { Photography } from "./Photography";
import { Design } from "./Design";
import { Architecture } from "./Architecture";
import { Nav } from "../components/Nav";


export const Browse = () => {
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";

  /*
    useEffect(() => {
        if (!accessToken) {
          history.push("/")
        }
    }, [history, accessToken]);
  */
  
 
  
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
