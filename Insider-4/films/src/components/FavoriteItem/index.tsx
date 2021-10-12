import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { STORAGE_KEY } from "@env";

// Styleds
import {
  Title,
  Container,
  RateContainer,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton,
} from "./styles";

// Utils
import { removeMovie } from "../../utils/storage";

// Types
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

type FavoriteItemParams = {
  movie: MovieProps;
};

function FavoriteItem({ movie }: FavoriteItemParams) {
  const navigation = useNavigation();

  async function removeMovieFromFavorites() {
    await removeMovie(STORAGE_KEY, movie.id);
  }

  function handleNavigateToDetails() {
    navigation.navigate("Details", {
      id: movie.id,
    });
  }

  return (
    <Container>
      <Title style={{ fontSize: 22 }}>{movie.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#E7A74E" />
        <Rate>{movie.vote_average} / 10</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton onPress={handleNavigateToDetails}>
          <Title style={{ fontSize: 14 }}>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton onPress={removeMovieFromFavorites}>
          <Feather name="trash" size={24} color="white" />
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
}

export default FavoriteItem;
