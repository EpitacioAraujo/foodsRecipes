import styled from 'styled-components';
import colors from '@colors';

export const Text = styled.Text`
  color: ${(props) =>
    props.secondary ? colors.secondaryText : colors.primaryText};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '20px')};
  ${(props) => props.style}
`;
