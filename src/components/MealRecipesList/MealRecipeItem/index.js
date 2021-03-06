import React from 'react';
import {Text, Icon} from '@core';
import {
  Card,
  Image,
  Description,
  ContainerLegend,
  CardLegend,
  TextLegend,
} from './styles';
import macarronada from '@images/macarronada.png';

const MealRecipeItem = ({Title, Time, Level}) => {
  return (
    <Card>
      <Image source={macarronada} />

      <Description>
        <Text>{Title}</Text>

        <ContainerLegend>
          <CardLegend>
            <Icon name="clock" />
            <TextLegend>{Time} mim</TextLegend>
          </CardLegend>

          <CardLegend>
            <Icon name="fire" />
            <TextLegend>{Level}</TextLegend>
          </CardLegend>
        </ContainerLegend>
      </Description>
    </Card>
  );
};

export default MealRecipeItem;
