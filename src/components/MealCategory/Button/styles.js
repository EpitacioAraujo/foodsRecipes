import styled from 'styled-components';
import colors from '@colors';

export const Button = styled.TouchableOpacity`
  min-width: 180px;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.selected ? colors.primary : colors.cards};
`;

export const IconCard = styled.View`
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
`;
