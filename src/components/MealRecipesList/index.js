import React from 'react';
import MealRecipeItem from './MealRecipeItem';
import {ListItems} from './styles';

const MealRecipeList = () => {
  const ListMealItems = [
    {id: '1', Title: 'Title', Time: '5mim', Level: 'easy'},
    {id: '2', Title: 'Title', Time: '5mim', Level: 'easy'},
    {id: '3', Title: 'Title', Time: '5mim', Level: 'easy'},
    {id: '4', Title: 'Title', Time: '5mim', Level: 'easy'},
    {id: '5', Title: 'Title', Time: '5mim', Level: 'easy'},
  ];

  return (
    <ListItems
      data={ListMealItems}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <MealRecipeItem {...item} />}
    />
  );
};

export default MealRecipeList;
