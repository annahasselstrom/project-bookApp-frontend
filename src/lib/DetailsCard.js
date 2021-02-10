import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  padding: 20px;
  border-radius: 6px;
  border: black;
  margin-top: 10px;
  background: white;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  @media (min-width: 768px) {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const SecondaryContainer = styled.div`
  margin-bottom: 26px;
  margin-left: 20px;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-left: 40px;
  }
`
const Title = styled.h1`
  margin: 0;
  color: black;
  font-size: 18px;
  text-align: left;
  margin-top: 10px;
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
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  margin-right: 15px;
  margin-top: 0%;
`
const TitleBar = styled.div`
  display: flex;
`
const Content = styled.div`
  justify-content: start;
  margin-left: 0;
  width: 50%;
`
const DescriptionContent = styled.div`
  margin-bottom: 20px;
  margin-right: 12px;
  line-height: 1.4;
  @media (min-width: 768px) {
    display: flex;
    font-size: 14px;
    margin-top: 2px;
    margin-bottom: 30px;
    margin-right: 22px;
  }
`
const HeadingText = styled.h3`
  margin-top: 16px;
  margin-bottom: 2px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  @media (min-width: 768px) {
    margin-right: 22px;
  }
  `
const StyledButton = styled.button`
font-size: 14px;
padding: 6px;
background-color:  #ffad4f;
color: white;
border: none;
border-radius: 4px;
margin-top: 20px;
margin-bottom: 20px;
  @media (min-width: 768px) {
  margin-bottom: 0px;
  }
`
export const DetailsCard = ({ title, subtitle, authors, averageRating, thumbnail, description, isFavorite, onFavoriteToggle }) => (
  <Container>
    <SecondaryContainer>
      <TitleBar>
        {thumbnail && <Thumbnail url={thumbnail} />}
        {!thumbnail && <Thumbnail url="https://via.placeholder.com/150x200"></Thumbnail>}
        <Content>
          <div>
            {title && <Title>{title}</Title>}
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
            {authors && <Authors>By {authors}</Authors>}
          </div>
          <div>
            {averageRating && <AverageRating>Rating {averageRating}</AverageRating>}
          </div>
        </Content>
      </TitleBar>
      <ButtonContainer>
        <StyledButton
          onClick={() => onFavoriteToggle(isFavorite)}>
          {isFavorite ? 'Remove' : 'Add to favorite'}
        </StyledButton>
      </ButtonContainer>
      <HeadingText>Intro</HeadingText>
      <DescriptionContent>
        {description && <DescriptionContent>{description}</DescriptionContent>}
      </DescriptionContent>
    </SecondaryContainer>
  </Container>
);