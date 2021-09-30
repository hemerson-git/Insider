import React from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import { Container, MenuButton, Title } from "./styles";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type HeaderProps = {
  title: string;
};

function Header({ title = "Title" }: HeaderProps) {
  const navigation = useNavigation();

  function toggleDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return (
    <Container>
      <MenuButton onPress={toggleDrawer}>
        <Feather name="menu" size={32} color="#FFF" />
      </MenuButton>

      <Title>{title}</Title>
    </Container>
  );
}

export default Header;
