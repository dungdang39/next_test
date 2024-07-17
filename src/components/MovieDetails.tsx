'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from '../lib/api';

const MovieDetails: React.FC<{ movieId: number }> = ({ movieId }) => {
  const { data, isLoading, isError } = useQuery(['movie', movieId], () => fetchMovieDetails(movieId));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="p-4">
      <h2>{data.title}</h2>
      <p>{data.overview}</p>
      <p>Release Date: {data.release_date}</p>
    </div>
  );
};

export default MovieDetails;
