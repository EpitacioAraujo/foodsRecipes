import styled from 'styled-components';
import VIcons from 'react-native-vector-icons/FontAwesome5';
import colors from '@colors';

export const Text = styled.Text`
  color: ${(props) =>
    props.secondary ? colors.secondaryText : colors.primaryText};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '20px')};
  ${(props) => props.style}
`;

export const Icon = styled(VIcons)`
  color: ${colors.primary};
  font-size: 20px;
`;
