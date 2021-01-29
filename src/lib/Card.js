import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
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
  font-size: 20px;
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
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.url});
  margin-right: 10px;
`
const TitleBar = styled.div`
  display: flex;
  align-items: center;
`
const Content = styled.div`
  justify-content: start;
`
const Description = styled.div`
  font-size: 14px;
  `

export const Card = ( { title, subtitle, authors, averageRating, thumbnail, description }) => (
    <Container>

        <TitleBar>
        {thumbnail && <Thumbnail url={thumbnail} />}
        <Content>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {authors && <Authors>{authors}</Authors>}
            {averageRating && <AverageRating>Rating {averageRating}</AverageRating>}
            {description && <Description>{description}</Description>}
        </Content>
        </TitleBar>
    </Container>
)