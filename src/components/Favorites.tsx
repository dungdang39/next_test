'use client';

import React from 'react';
import { useStore } from '../stores/useStore';

const Favorites: React.FC = () => {
  const favorites = useStore((state) => state.favorites);
  const removeFavorite = useStore((state) => state.removeFavorite);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((movie: any) => (
          <li key={movie.id} className="flex justify-between items-center">
            {movie.title}
            <button onClick={() => removeFavorite(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
