import React from 'react';
import {Image as RNImage} from 'react-native';
import {Text} from '@core';
import {
  Card,
  Image,
  Description,
  ContainerLegend,
  CardLegend,
  IconLegend,
  TextLegend,
} from './styles';

const MealRecipeItem = ({Title, Time, Level}) => {
  return (
    <Card>
      <Image>
        <RNImage style={{flex: 1}} />
      </Image>
      <Description>
        <Text>{Title}</Text>
        <ContainerLegend>
          <CardLegend>
            <IconLegend />
            <TextLegend>{Time}</TextLegend>
          </CardLegend>
          <CardLegend>
            <IconLegend />
            <TextLegend>{Level}</TextLegend>
          </CardLegend>
        </ContainerLegend>
      </Description>
    </Card>
  );
};

export default MealRecipeItem;
