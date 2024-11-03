import Arraival from "../shared/Arraival";
import CountProduct from "./CountProduct";
import FilterProduct from "./FilterProduct";
import ProductCard from "./ProductCard";
import SearchProduct from "./SearchProduct";
import SortProduct from "./SortProduct";

export default function ProductBoard() {
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <Arraival />
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="w-full">
              <SortProduct />
              <FilterProduct />
            </div>

            <div className="flex gap-2 items-center">
              <SearchProduct />
              <CountProduct />
            </div>
          </div>
        </div>

        <ProductCard />
      </div>
    </div>
  );
}
