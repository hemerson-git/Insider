import React from "react";

// Styleds
import { Container, Title } from "./styles";

type GenresProps = {
  title: string;
};

function Genres({ title }: GenresProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}

export default Genres;
