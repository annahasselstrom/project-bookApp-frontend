import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { AddButton } from "./AddButton";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: wrap;
  
`

const Container = styled.div`
  padding: 20px;
  border-radius: 6px;
  border: black;
  margin: 10px;
  background: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  @media (min-width: 768px) {
    width: 400px;
    justify-content: center;
  }
`

const Title = styled.h1`
  margin: 0;
  color: black;
  font-size: 18px;
  text-align: left;
  margin-top: 15px;
`

const Subtitle = styled.p`
  margin: 0;
  margin-top: 8px;
  color: #6b6b6b;
  text-align: left;
  font-size: 16px;
`
const Authors = styled.p`
  margin: 0;
  color: #6b6b6b;
  font-size: 14px;
  text-align: left;
  margin-top: 15px;

`
const AverageRating = styled.p`
  margin: 0;
  color: #6b6b6b;
  font-size: 14px;
  text-align: left;
`
const Thumbnail = styled.img`
  height: 200px;
  width: 160px;
  margin-right: 20px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  margin-right: 30px;
  margin-top: 0%;
`
const TitleBar = styled.div`
  display: flex;
`
const Content = styled.div`
  justify-content: start;
  width: 60%;
`
const Description = styled.div`
  font-size: 14px;
  margin-top: 20px;
  `
const StyledButton = styled.button`
font-size: 14px;
padding: 5px;
background: red;
`

  export const Card = ({ title, subtitle, authors, averageRating, thumbnail, description, button }) => (
  <OuterContainer>
  <Container> 
      <TitleBar>
       {thumbnail && <Thumbnail url={thumbnail} />}
          <Content>
            <div>
              {button && <StyledButton>{button}</StyledButton>}
              </div>
            <div>
              {title && <Title>{title}</Title>}
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              {authors && <Authors>By {authors}</Authors>}
            </div>
            <div>
              {averageRating && <AverageRating>Rating {averageRating}</AverageRating>}
            </div>
            <div>
              {description && <Description>{description}</Description>}
            </div>
      </Content>
      </TitleBar>
  </Container>
  </OuterContainer>
)