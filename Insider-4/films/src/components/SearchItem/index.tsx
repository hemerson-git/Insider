import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import MovieImagePlaceholder from "../../assets/semfoto.png";

// Styleds
import { Container, Banner, Title, RateContainer, RateAverage } from "./styles";

// types
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

type SearchParamsProps = {
  movie: MovieProps;
};

function SearchItem({ movie }: SearchParamsProps) {
  const navigation = useNavigation();

  function handleNavigateToDetails() {
    // @ts-ignore
    navigation.navigate("Details", {
      id: movie.id,
    });
  }

  return (
    <Container activeOpacity={0.8} onPress={handleNavigateToDetails}>
      <Banner
        resizeMethod="resize"
        source={
          movie.poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
              }
            : MovieImagePlaceholder
        }
      />

      <Title>{movie.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A748" />

        <RateAverage>{movie?.vote_average} / 10</RateAverage>
      </RateContainer>
    </Container>
  );
}

export default SearchItem;
