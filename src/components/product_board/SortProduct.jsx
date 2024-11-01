import SortProductSvg from "../svg/productSvg/SortProductSvg";

export default function SortProduct() {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Sort
          <SortProductSvg />
        </button>
      </div>

      {/* <SortProductModal /> */}
    </div>
  );
}
