import { useState } from "react";
import { SearchContext } from "../context";
import useDebounce from "../hooks/useDebounce";

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const { debouncedSearchText } = useDebounce(searchText, 500);

  return (
    <SearchContext.Provider
      value={{ setSearchText, searchText, debouncedSearchText }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
