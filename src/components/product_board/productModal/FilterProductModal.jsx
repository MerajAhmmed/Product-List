import { useContext } from "react";
import { ProductContext } from "../../../context";

export default function FilterProductModal({ categories, onFilterModal }) {
  const { onSelectedCategory, selectedCategory } = useContext(ProductContext);

  function handleFilterChange(category) {
    if (category === selectedCategory) {
      onSelectedCategory("");
    } else {
      onSelectedCategory(category);
    }
    onFilterModal();
  }

  return (
    <div
      className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="filter-button"
      tabIndex="-1"
      id="filter-dropdown"
    >
      <div className="py-1" role="none">
        {categories.length > 0 ? (
          categories.map((item) => (
            <label
              key={item}
              className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4"
                id="filter-option-1"
                onChange={() => handleFilterChange(item)}
                checked={item === selectedCategory}
              />
              <span className="ml-2">{item}</span>
            </label>
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </div>
  );
}
