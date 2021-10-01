import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

// Components
import Header from "../../components/Header";

// Styleds
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

// Services
import TMDB_API, { TMDB_KEY } from "../../services/tmdbApi";
import Load from "../../components/Load";
import { getMovieList } from "../../utils/movies";

// Types

type MovieProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([] as MovieProps[]);
  const [pupularMovies, setPopularMovies] = useState([] as MovieProps[]);
  const [topRatedMovies, setTopRatedMovies] = useState([] as MovieProps[]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);

      const [nowPlaying, popular, topRated] = await Promise.all([
        TMDB_API.get(`movie/now_playing`, {
          params: {
            api_key: TMDB_KEY,
            language: "pt-BR",
            page: 1,
          },
        }),

        TMDB_API.get(`movie/popular`, {
          params: {
            api_key: TMDB_KEY,
            language: "pt-BR",
            page: 1,
          },
        }),

        TMDB_API.get(`movie/top_rated`, {
          params: {
            api_key: TMDB_KEY,
            language: "pt-BR",
            page: 1,
          },
        }),
      ]);

      //@ts-ignore
      const nowList = getMovieList(10, nowPlaying.data.results);
      //@ts-ignore
      const popularList = getMovieList(5, popular.data.results);
      //@ts-ignore
      const topList = getMovieList(5, topRated.data.results);

      if (nowList) {
        //@ts-ignore
        setNowPlayingMovies(nowList);
      }

      if (popularList) {
        //@ts-ignore
        setPopularMovies(popularList);
      }

      if (topList) {
        //@ts-ignore
        setTopRatedMovies(topList);
      }

      setIsLoading(false);
    }

    getMovies();
  }, []);

  if (isLoading) {
    return <Load />;
  }

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
          data={nowPlayingMovies}
          renderItem={({ item }) => <SliderItem movie={item} />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Populares</Title>

        <SliderMovies
          horizontal
          data={pupularMovies}
          renderItem={({ item }) => <SliderItem movie={item} />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Mais Votados</Title>

        <SliderMovies
          horizontal
          data={topRatedMovies}
          renderItem={({ item }) => <SliderItem movie={item} />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </Container>
  );
}

export default Home;
