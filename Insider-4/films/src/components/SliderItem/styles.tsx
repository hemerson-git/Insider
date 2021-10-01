import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 16px;
  padding-left: 0;
  width: 140px;
  height: 180px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 8px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rate = styled.Text`
  padding-left: 4px;
  color: #fff;
  font-size: 14px;
`;
