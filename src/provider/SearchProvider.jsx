import { useState } from "react";
import { SearchContext } from "../context";

const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ setSearchText, searchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
