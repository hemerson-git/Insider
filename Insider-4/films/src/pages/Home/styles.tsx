import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #141a29;
  flex: 1;
  padding: 4px 0;
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  padding: 0 14px;
  margin-bottom: 8px;
`;

export const SearchInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.4);
  height: 50px;
  border-radius: 50px;
  padding: 8px 16px;
  color: #fff;
  font-size: 18px;

  flex: 17;
`;

export const SearchButton = styled.TouchableOpacity`
  flex: 3;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  padding-bottom: 8px;
  color: white;
  padding-left: 16px;
  padding-right: 16px;
`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`
  height: 150px;
  border-radius: 8px;
  margin: 0 14px;
`;

export const SliderMovies = styled.FlatList`
  height: 250px;
  padding: 0 16px;
`;
