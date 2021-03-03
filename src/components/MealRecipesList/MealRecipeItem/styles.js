import styled from 'styled-components/native';
import {Text} from '@core';
import colors from '@colors';

export const Card = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 35px;
  border-radius: 5px;
  background-color: ${colors.cards};
  flex-direction: row;
`;

export const Image = styled.View`
  width: 30%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: -30px;
`;

export const Description = styled.View`
  flex: 1;
  padding: 0px 20px;
`;

export const ContainerLegend = styled.View`
  margin-top: 10px;
  max-width: 200px;
  flex-direction: row;
`;

export const CardLegend = styled.View`
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;

export const IconLegend = styled.View`
  width: 20px;
  height: 20px;
  background-color: ${colors.primary};
  border-radius: 150px;
`;

export const TextLegend = styled(Text)`
  color: ${colors.secondaryText};
  font-size: 15px;
`;
