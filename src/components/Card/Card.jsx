import * as React from "react";
import styled from "styled-components";
// import { Image } from "react-native";

function Card({ data }) {
  console.log(data);

  return (
    <Container>
      <ImageHolder>
        <Image source={data.background} />
      </ImageHolder>
      <NameHolder>
        <TextContainer>{data.name}</TextContainer>
      </NameHolder>
    </Container>
  );
}

export default Card;

const Container = styled.View`
  width: 300px;
  height: 200px;
  background-color: white;
  margin-left: 20px;
  margin-top: 50px;
  border-radius: 14px;
  overflow: hidden;
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15); */
`;

const TextContainer = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: bold;
  /* letter-spacing: 2px; */
`;

const NameHolder = styled.View`
  width: 100%;
  padding-top: 20px;
  align-items: center;
`;

const ImageHolder = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
