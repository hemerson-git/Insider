import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import { STORAGE_KEY } from "@env";

// Styleds
import { Container, MovieList } from "./styles";

// Utils
import { getSavedMovies } from "../../utils/storage";
import { FlatList } from "react-native";
import FavoriteItem from "../../components/FavoriteItem";

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

function Movies() {
  const [movies, setMovies] = useState([] as MovieProps[]);

  useEffect(() => {
    let isActive = true;

    async function getMovies() {
      const movieList = await getSavedMovies(STORAGE_KEY);

      if (movieList) {
        setMovies(movieList);
      }
    }

    if (isActive) {
      getMovies();
    }

    return () => {
      isActive = false;
    };
  }, [movies]);

  return (
    <Container>
      <Header title="Meus Filmes" />

      <MovieList
        data={movies}
        renderItem={({ item }) => <FavoriteItem movie={item} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}

export default Movies;
