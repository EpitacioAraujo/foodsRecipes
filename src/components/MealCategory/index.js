import React from 'react';
import {Text} from '@core';
import Button from './Button';
import {FlatList} from './styles';

const MealCategory = () => {
  const MealCategoryList = [
    {id: '1', title: 'Merenda'},
    {id: '2', title: 'Almoço'},
    {id: '3', title: 'Jantar'},
  ];
  return (
    <>
      <Text>Categorias</Text>

      <FlatList
        data={MealCategoryList}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Button title={item.title} />}
        horizontal
      />
    </>
  );
};

export default MealCategory;
