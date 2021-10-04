import React from "react";
import { Ionicons } from "@expo/vector-icons";

// Styled Components
import { Container, BannerImage, RatingContainer, Title, Rate } from "./styles";
import { useNavigation } from "@react-navigation/core";

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

type SliderItemProps = {
  movie: MovieProps;
};

function SliderItem({ movie }: SliderItemProps) {
  const navigation = useNavigation();

  function handleNavigateTo() {
    //@ts-ignore
    navigation.navigate("Details", {
      id: movie.id,
    });
  }

  return (
    <Container activeOpacity={0.8} onPress={handleNavigateTo}>
      <BannerImage
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
      />

      <Title numberOfLines={1}>{movie.title}</Title>

      <RatingContainer>
        <Ionicons name="md-star" size={14} color="#E7A74E" />
        <Rate>{movie.vote_average}/10</Rate>
      </RatingContainer>
    </Container>
  );
}

export default SliderItem;
