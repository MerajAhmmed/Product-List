import { useEffect, useState } from "react";

export default function useDebounce(searchText, delay) {
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchText, delay]);
  return { debouncedSearchText };
}
