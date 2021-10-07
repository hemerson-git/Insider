import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 16px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding-top: 8px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const RateAverage = styled.Text`
  padding-left: 4px;
  color: #fff;
  font-size: 12px;
`;
