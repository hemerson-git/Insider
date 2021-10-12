import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
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
  Rate,
  ListGenres,
  DescriptionContainer,
  Description,
  ReleaseStatusContainer,
  ReleaseStatus,
  ReleaseDate,
} from "./styles";

// Services
import TMDB_API, { TMDB_KEY } from "../../services/tmdbApi";

// Components
import Load from "../../components/Load";
import Genres from "../../components/Genres";
import ModalLink from "../../components/ModalLink";
import { getBrazilianDate } from "../../utils/date";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  function handleCloseModal() {
    setIsModalOpen(false);
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

      <ButtonLink activeOpacity={0.8} onPress={() => setIsModalOpen(true)}>
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

        <Rate>{movie.vote_average} / 10</Rate>
      </ContentArea>

      <ListGenres
        data={movie?.genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        // @ts-ignore
        keyExtractor={(item) => String(item.id)}
        // @ts-ignore
        renderItem={({ item }) => <Genres title={item.name} />}
      />

      {!!movie.release_date && (
        <ReleaseStatusContainer>
          <ReleaseStatus
            style={{
              backgroundColor: movie.status === "Released" ? "green" : "red",
            }}
          >
            {movie.status === "Released" ? "Lançado" : "Não Lançado"}
          </ReleaseStatus>

          <ReleaseDate>{getBrazilianDate(movie.release_date)}</ReleaseDate>
        </ReleaseStatusContainer>
      )}

      {!!movie.overview && (
        <DescriptionContainer showsVerticalScrollIndicator={false}>
          <Title>Descrição</Title>
          <Description>{movie?.overview}</Description>
        </DescriptionContainer>
      )}

      <Modal animationType="slide" transparent visible={isModalOpen}>
        <ModalLink
          link={movie.homepage}
          closeModal={handleCloseModal}
          title={movie.title}
        />
      </Modal>
    </Container>
  );
}

export default MovieDetails;
