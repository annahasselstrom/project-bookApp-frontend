import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import { Anthropology } from "./Anthropology";
import { Philosophy } from "./Philosophy";
import { Arts } from "./Arts";
import { Photography } from "./Photography";
import { Design } from "./Design";
import { Architecture } from "./Architecture";

export const Browse = () => {
  const API_KEY = "AIzaSyBMTkeEyzxF2RWvjntlELxi9BKATuFxRDU";

  /*
    useEffect(() => {
        if (!accessToken) {
          history.push("/")
        }
    }, [history, accessToken]);
  */
  
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
  return (
    <>
      <h1 className="browse">Browse subjects</h1>
      <Container>
        <Anthropology />
        <Philosophy />
        <Architecture />
        <Photography />
        <Arts />
        <Design />
      </Container>
      </>
    )
};