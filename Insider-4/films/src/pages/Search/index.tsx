import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";

// Styleds
import { Container, ListMovies } from "./styles";

// Components
import Load from "../../components/Load";
import SearchItem from "../../components/SearchItem";

// Services
import TMDB_API, { TMDB_KEY } from "../../services/tmdbApi";

// Types
type ParamList = {
  SearchProps: {
    query: string;
  };
};

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

type ResultsProps = {
  results: MovieProps[];
};

function Search() {
  const { params } = useRoute<RouteProp<ParamList>>();
  const { query } = params;

  const [moviesResult, setMoviesResult] = useState([] as MovieProps[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getSeachedMovies() {
      const response = await TMDB_API.get(`search/movie/`, {
        params: {
          query,
          api_key: TMDB_KEY,
          language: "pt-BR",
          page: 1,
        },
      });

      const { results } = response?.data as ResultsProps;

      if (isActive) {
        setMoviesResult(results);
        setIsLoading(false);
      }
    }

    if (isActive) getSeachedMovies();

    return () => {
      isActive = false;
    };
  }, []);

  if (isLoading) {
    return <Load />;
  }

  return (
    <Container>
      <ListMovies
        data={moviesResult}
        // @ts-ignore
        keyExtractor={(item) => String(item.id)}
        // @ts-ignore
        renderItem={({ item: movie }: MovieProps) => (
          <SearchItem movie={movie} />
        )}
      />
    </Container>
  );
}

export default Search;
