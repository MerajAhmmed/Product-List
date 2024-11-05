import { useState } from "react";
import { toast } from "react-toastify";
import Arraival from "../shared/Arraival";
import DeleteIconSvg from "../svg/taostSvg/DeleteIconSvg";
import CountProduct from "./CountProduct";
import Products from "./Products";
import SearchProduct from "./SearchProduct";
import SortFilterProduct from "./SortFilterProduct";

export default function ProductBoard() {
  const [sort, setSort] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  function handleAddToCart(product) {
    const found = cartProducts.find((item) => {
      return item.id === product.id;
    });
    if (found) {
      setCartProducts(cartProducts.filter((item) => item.id !== product.id));
      toast("Remove product successfully", {
        icon: DeleteIconSvg,
      });
    } else {
      setCartProducts([...cartProducts, product]);
      toast.success("Add product successfully");
    }
  }
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
              <CountProduct cartProducts={cartProducts} />
            </div>
          </div>
        </div>

        <Products
          sort={sort}
          handleAddToCart={handleAddToCart}
          cartProducts={cartProducts}
        />
      </div>
    </div>
  );
}
