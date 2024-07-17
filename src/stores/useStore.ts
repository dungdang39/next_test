import create from 'zustand';

interface StoreState {
  favorites: any[];
  addFavorite: (movie: any) => void;
  removeFavorite: (movieId: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  favorites: [],
  addFavorite: (movie) => set((state) => ({
    favorites: [...state.favorites, movie],
  })),
  removeFavorite: (movieId) => set((state) => ({
    favorites: state.favorites.filter((movie) => movie.id !== movieId),
  })),
}));
