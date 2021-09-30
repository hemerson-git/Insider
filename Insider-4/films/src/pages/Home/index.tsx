import React from "react";
import { Feather } from "@expo/vector-icons";

// Components
import Header from "../../components/Header";

// Styles
import {
  Container,
  SearchContainer,
  SearchInput,
  SearchButton,
} from "./styles";

function Home() {
  return (
    <Container>
      <Header title="React Prime" />

      <SearchContainer>
        <SearchInput placeholder="Ex: Vingadores" placeholderTextColor="#BBB" />

        <SearchButton>
          <Feather name="search" size={32} color="#FFF" />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
}

export default Home;
