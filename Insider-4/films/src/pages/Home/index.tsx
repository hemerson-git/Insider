import React from "react";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

// Components
import Header from "../../components/Header";

// Styles
import {
  Container,
  SearchContainer,
  SearchInput,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovies,
} from "./styles";
import SliderItem from "../../components/SliderItem";

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

      <ScrollView>
        <Title>Em Cartaz</Title>

        <BannerButton activeOpacity={0.9} onPress={() => alert("Clicked")}>
          <Banner
            resizeMethod="resize"
            source={{
              uri: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80",
            }}
          />
        </BannerButton>

        <SliderMovies
          horizontal
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
        />

        <Title>Populares</Title>

        <SliderMovies
          horizontal
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
        />

        <Title>Mais Votados</Title>

        <SliderMovies
          horizontal
          data={[1, 2, 3, 4]}
          renderItem={({ item }) => <SliderItem />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </Container>
  );
}

export default Home;
