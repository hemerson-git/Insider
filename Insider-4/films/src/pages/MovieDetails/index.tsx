import React, { useEffect, useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";

// @ts-ignore
import Stars from "react-native-stars";

// Styleds
import {
  Container,
  Header,
  HeaderButton,
  Title,
  Banner,
  ButtonLink,
  ContentArea,
} from "./styles";

// Services
import TMDB_API, { TMDB_KEY } from "../../services/tmdbApi";

// Components
import Load from "../../components/Load";
import { Rate } from "../../components/SliderItem/styles";

type MovieProps = {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_639_1: string;
      name: string;
    }
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];

  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieDetailsParams = {
  id: number;
};

function MovieDetails() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { id } = params as MovieDetailsParams;
  const [movie, setMovie] = useState({} as MovieProps);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getMovie() {
      if (id) {
        // @ts-ignore
        const { data } = await TMDB_API.get(`movie/${id}`, {
          params: {
            api_key: TMDB_KEY,
            language: "pt-BR",
          },
        })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setIsLoading(false);
          });

        if (isActive && movie.id !== id) {
          setMovie(data);
        }
      }
    }

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    };
  }, [movie]);

  function handleGoBack() {
    navigation.goBack();
  }

  if (isLoading) {
    return <Load />;
  }

  return (
    <Container>
      <Header>
        <HeaderButton>
          <Feather
            name="arrow-left"
            size={28}
            color="#FFF"
            onPress={handleGoBack}
          />
        </HeaderButton>

        <HeaderButton>
          <Ionicons name="bookmark" size={28} color="#FFF" />
        </HeaderButton>
      </Header>

      <Banner
        fadeDuration={500}
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
      />

      <ButtonLink activeOpacity={0.8}>
        <Feather name="link" size={24} color="#FFF" />
      </ButtonLink>

      <Title numberOfLines={1}>{movie.title}</Title>

      <ContentArea>
        <Stars
          default={movie.vote_average}
          count={10}
          half={true}
          starSize={20}
          fullStar={<Ionicons name="md-star" size={24} color="#E7A74e" />}
          emptyStar={
            <Ionicons name="md-star-outline" size={24} color="#E7A74e" />
          }
          halfStar={<Ionicons name="md-star-half" size={24} color="#E7A74e" />}
          disabled
        />

        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>
    </Container>
  );
}

export default MovieDetails;
