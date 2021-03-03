import React from 'react';
import Container from '@components/Container';
import MealCategory from '@components/MealCategory';
import MealRecipesList from '@components/MealRecipesList';

const Home = () => {
  return (
    <Container>
      <MealCategory />
      <MealRecipesList />
    </Container>
  );
};

export default Home;
