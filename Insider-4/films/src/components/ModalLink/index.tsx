import React from "react";
import { Feather } from "@expo/vector-icons";
import WebView from "react-native-webview";

// Styleds
import { CloseButton, Title } from "./styles";

type ModalLinkProps = {
  link: string;
  title: string;
  closeModal: () => void;
};

function ModalLink({ link, title, closeModal }: ModalLinkProps) {
  return (
    <>
      <CloseButton onPress={closeModal}>
        <Feather name="x" size={36} color="#FFF" />
        <Title numberOfLines={1}>{title}</Title>
      </CloseButton>

      <WebView
        source={{
          uri: link,
        }}
      />
    </>
  );
}

export default ModalLink;
