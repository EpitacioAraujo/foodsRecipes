import React from 'react';
import {Text} from '@core';
import {Container, View} from './styles';

const Header = () => {
  return (
    <Container>
      <View>
        <Text>Olá, Epitacio!</Text>
        <Text secondary fontSize={14}>
          Pronto para cozinhar?
        </Text>
      </View>
    </Container>
  );
};

export default Header;
