import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.button`
  padding: 20px;
  border-radius: 6px;
  border: black;
  margin: 10px;
  background: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`

const Title = styled.h1`
  margin: 0;
  color: black;
  font-size: 24px;
  `

const Subtitle = styled.p`
  margin: 0;
  color: #6b6b6b;
`
const Authors = styled.p`
  margin: 0;
  color: #6b6b6b;
  font-size: 14px;
`

const AverageRating = styled.p`
  margin: 0;
  color: #6b6b6b;
  font-size: 14px;
`

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  //background-image: url(${(props) => props.url});
  //background-size: cover;
  margin-right: 10px;
  `

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  `

export const SubjectButton = ( { title, subtitle, authors, averageRating, thumbnail }) => (
  <Container>
    {title && <Title>{title}</Title>}
  </Container>
)