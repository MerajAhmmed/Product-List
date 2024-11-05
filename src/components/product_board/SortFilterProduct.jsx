import { useEffect, useState } from "react";
import FilterProductSvg from "../svg/productSvg/FilterProductSvg";
import SortProductSvg from "../svg/productSvg/SortProductSvg";
import FilterProductModal from "./productModal/FilterProductModal";
import SortProductModal from "./productModal/SortProductModal";

export default function SortFilterProduct({ onSort }) {
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
        setCategories(await res.json());
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, []);

  function onShowSortModal() {
    setShowSortModal((prev) => !prev);
    setShowFilterModal(false);
  }

  function handleFilterModal() {
    setShowFilterModal((prev) => !prev);
    setShowSortModal(false);
  }

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={onShowSortModal}
          >
            Sort
            <SortProductSvg />
          </button>
        </div>

        {showSortModal && (
          <SortProductModal onSort={onSort} onShowSortModal={onShowSortModal} />
        )}
      </div>

      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
            id="filter-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={handleFilterModal}
          >
            Filter
            <FilterProductSvg />
          </button>
        </div>

        {showFilterModal && (
          <FilterProductModal
            categories={categories}
            onFilterModal={handleFilterModal}
          />
        )}
      </div>
    </>
  );
}
