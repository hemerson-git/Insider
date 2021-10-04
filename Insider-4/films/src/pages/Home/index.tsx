import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

// Components
import Header from "../../components/Header";
import Load from "../../components/Load";

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
import { getMovieList, getRandomNumber } from "../../utils/movies";

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

type SliderProps = {
  item: MovieProps;
};

function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([] as MovieProps[]);
  const [pupularMovies, setPopularMovies] = useState([] as MovieProps[]);
  const [topRatedMovies, setTopRatedMovies] = useState([] as MovieProps[]);
  const [bannerMovie, setBannerMovie] = useState({} as MovieProps);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const abortController = new AbortController();

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

      if (isActive) {
        //@ts-ignore
        const nowList = getMovieList(10, nowPlaying.data.results);
        //@ts-ignore
        const popularList = getMovieList(5, popular.data.results);
        //@ts-ignore
        const topList = getMovieList(5, topRated.data.results);

        if (nowList) {
          setNowPlayingMovies(nowList);

          const selectedMovieNumber = getRandomNumber(nowList);
          const selectedMovie = nowList[selectedMovieNumber];
          setBannerMovie(selectedMovie);
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
    }

    getMovies();

    return () => {
      isActive = false;
      abortController.abort();
    };
  }, []);

  function handleNavigateToDetails(movie: MovieProps) {
    navigation.navigate("Details", {
      id: movie.id,
    });
  }

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

        <BannerButton
          activeOpacity={0.9}
          onPress={() => handleNavigateToDetails(bannerMovie)}
        >
          <Banner
            resizeMethod="resize"
            source={{
              uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`,
            }}
          />
        </BannerButton>

        <SliderMovies
          horizontal
          data={nowPlayingMovies}
          renderItem={({ item }: SliderProps) => <SliderItem movie={item} />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Populares</Title>

        <SliderMovies
          horizontal
          data={pupularMovies}
          renderItem={({ item }: SliderProps) => <SliderItem movie={item} />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Mais Votados</Title>

        <SliderMovies
          horizontal
          data={topRatedMovies}
          renderItem={({ item }: SliderProps) => <SliderItem movie={item} />}
          fadingEdgeLength={15}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </Container>
  );
}

export default Home;
