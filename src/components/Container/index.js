import {useHeaderHeight} from '@react-navigation/stack';
import React from 'react';
import {View} from './styles';

const Container = ({children}) => {
  const headerHeight = useHeaderHeight();

  return <View headerHeight={headerHeight}>{children}</View>;
};

export default Container;
