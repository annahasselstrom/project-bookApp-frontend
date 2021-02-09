import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.button`
  display: flex;
  justify-content: center;

  padding: 20px;
  border-radius: 6px;
  border: black;
  background: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  @media (min-width: 768px) {
    width: 400px;
  }
`

const Title = styled.h1`
  margin: 0;
  color: black;
  font-size: 24px;
  `

export const SubjectButton = ( { title }) => (
  <Container>
    {title && <Title>{title}</Title>}
  </Container>
)