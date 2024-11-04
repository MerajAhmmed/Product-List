import { useState } from "react";
import Arraival from "../shared/Arraival";
import CountProduct from "./CountProduct";
import ProductCard from "./Products";
import SearchProduct from "./SearchProduct";
import SortFilterProduct from "./SortFilterProduct";

export default function ProductBoard() {
  const [sort, setSort] = useState(null);
  function handleSort(type) {
    setSort(type);
  }
  return (
    <div>
      <div className="pt-16 sm:pt-24 lg:pt-40">
        <Arraival />
        <div className="mt-10">
          <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="w-full">
              <SortFilterProduct onSort={handleSort} />
            </div>

            <div className="flex gap-2 items-center">
              <SearchProduct />
              <CountProduct />
            </div>
          </div>
        </div>

        <ProductCard sort={sort} />
      </div>
    </div>
  );
}
