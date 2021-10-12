import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

export const Rate = styled.Text`
  color: white;
  margin-left: 4px;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DetailButton = styled.TouchableOpacity`
  background-color: #e72f49;
  height: 38px;

  align-items: center;
  justify-content: center;
  flex: 1;

  border-radius: 32px;
`;

export const DeleteButton = styled.TouchableOpacity`
  height: 38px;
  align-items: center;
  justify-content: center;
  width: 15%;
`;
