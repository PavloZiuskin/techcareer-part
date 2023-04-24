import React from 'react';
import { Container } from '../../components/SharedLayout/SharedLayout.styled';
import styled from "styled-components";
function Home() {
  return (
    <Container>
      <div>
        <Caption>Welcome to the tweets</Caption>
        <Text>Here you can find and follow interesting people</Text>
      </div>
    </Container>
  );
}

export default Home;

export const Caption = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 28px;
`;