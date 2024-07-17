'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../lib/api';
import { useStore } from '../stores/useStore';

const MovieList: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });
  const addFavorite = useStore((state) => state.addFavorite);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((movie: any) => (
        <div key={movie.id} className="border p-4">
          <h3>{movie.title}</h3>
          <p>Release Date: {movie.release_date}</p>
          <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
