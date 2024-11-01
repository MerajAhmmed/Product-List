import FilterProductSvg from "../svg/productSvg/FilterProductSvg";
import FilterProductModal from "./productModal/FilterProductModal";

export default function FilterProduct() {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="filter-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          Filter
          <FilterProductSvg />
        </button>
      </div>

      <FilterProductModal />
    </div>
  );
}
