import * as React from "react";
import Card from "./src/components/Card/Card.jsx";
import { ScrollView, View } from "react-native";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <CardContainer>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {datas.map((data) => (
            <Card data={data} key={data.id} />
          ))}
        </ScrollView>
      </CardContainer>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "white",
          elevation: 10,
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
        }}
      />
    </Container>
  );
}

export default App;

// const Div = styled.View`
//   width: 200px;
//   height: 200px;
//   background-color: white;
// `;

const Container = styled.View`
  flex: 1;
  /* flex-direction: row; */
  /* justify-content: center; */
  background-color: #f0f3f5;
`;

const CardContainer = styled.View`
  flex-direction: row;
`;

const datas = [
  {
    id: 1,
    name: "Swaraj",
    subtitle: "Full Stack Web Developer",
    background: require("./assets/background1.jpg"),
    dob: "15/08/1999",
  },
  {
    id: 2,
    name: "Niket",
    subtitle: "Digital Marketer",
    background: require("./assets/background2.jpg"),
    dob: "21/08/1997",
  },
];
