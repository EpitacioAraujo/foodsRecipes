import React from 'react';
import Container from '@components/Container';
import MealCategory from '@components/MealCategory';
import MealRecipesList from '@components/MealRecipesList';

const Search = () => {
  return (
    <Container>
      <MealCategory />
      <MealRecipesList />
    </Container>
  );
};

export default Search;
