import React from "react";
import { Ionicons } from "@expo/vector-icons";

// Styled Components
import { Container, BannerImage, RatingContainer, Title, Rate } from "./styles";

type SliderItemProps = {};

function SliderItem() {
  return (
    <Container activeOpacity={0.8}>
      <BannerImage
        source={{
          uri: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80",
        }}
      />

      <Title numberOfLines={1}>Vingadores Vingadores Vingadores</Title>

      <RatingContainer>
        <Ionicons name="md-star" size={14} color="#E7A74E" />
        <Rate>9/10</Rate>
      </RatingContainer>
    </Container>
  );
}

export default SliderItem;
