import React from "react";
import LottieView from "lottie-react-native";

// Assets
import movieAnimation from "../../../assets/movie-theatre.json";

// Styleds
import { Container, Title, Subtitle, TitleContainer, Title2 } from "./styles";

function Load() {
  return (
    <Container>
      <TitleContainer>
        <Title>React</Title>
        <Title2>Prime</Title2>
      </TitleContainer>

      <LottieView
        source={movieAnimation}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
      <Subtitle>Loading ...</Subtitle>
    </Container>
  );
}

export default Load;
