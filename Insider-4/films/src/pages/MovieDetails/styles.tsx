import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #141a29;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;

  z-index: 99;
  position: absolute;
  top: 35px;
  width: 100%;
  padding: 0 16px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(26, 26, 48, 0.8);
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  background-color: white;
`;

export const ButtonLink = styled.TouchableOpacity`
  position: absolute;
  top: 300px;
  right: 16px;

  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  background-color: #e72f49;
  color: white;
  border-radius: 32px;
  z-index: 99;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 8px 16px;
  margin-top: 16px;
`;

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
`;

export const Rate = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ListGenres = styled.FlatList`
  padding-left: 16px;
  margin: 8px 0;
  max-height: 36px;
`;

export const DescriptionContainer = styled.ScrollView``;

export const Description = styled.Text`
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 32px;
  color: #fff;
  line-height: 20px;
`;
