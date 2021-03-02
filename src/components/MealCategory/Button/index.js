import React from 'react';
import {Text} from '@core';
import {Button as StyleButton, IconCard} from './styles';

const Button = ({title, icon}) => (
  <StyleButton>
    <IconCard />
    <Text>{title}</Text>
  </StyleButton>
);

export default Button;
