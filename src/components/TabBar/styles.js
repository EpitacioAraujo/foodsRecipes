import styled from 'styled-components';
import {Icon as CIcon} from '@core';
import colors from '@colors';

export const Container = styled.View`
  padding: 10px 0px;
  flex-direction: row;
  background-color: ${colors.background};
  justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(CIcon)`
  font-size: 30px;
`;
