import React from 'react';
import MovieList from '../components/MovieList';
import Favorites from '../components/Favorites';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Review App</h1>
      <MovieList />
      <Favorites />
    </div>
  );
};

export default HomePage;
