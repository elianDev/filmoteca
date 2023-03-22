import React from "react";
import { SearchContainer } from "../styles/Search.styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <SearchContainer className="container">
      <MagnifyingGlass size={24} />
      <input
        type="text"
        placeholder="Pesquisar..."
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
    </SearchContainer>
  );
};

export default Search;
