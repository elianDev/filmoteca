import React, { createContext, ReactNode, useState } from "react";

interface UserContextInterface {
  list: Movie[];
  setList: React.Dispatch<React.SetStateAction<Movie[]>>;
  addMovie: (newMovie: Movie) => void;
  removeMovie: (movie: number) => void;
}

export const GlobalContext = createContext<UserContextInterface>(
  {} as UserContextInterface,
);

interface MyContextType {
  children: ReactNode;
}

export const GlobalStorage = ({ children }: MyContextType) => {
  const [list, setList] = useState<Movie[]>([]);

  function addMovie(newMovie: Movie) {
    setList([...list, newMovie]);
  }

  function removeMovie(movie: number) {
    const newMovies = list.filter((item) => item.id !== movie);
    setList(newMovies);
  }

  return (
    <GlobalContext.Provider
      value={{
        list,
        setList,
        addMovie,
        removeMovie,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
