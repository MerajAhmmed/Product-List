import { useContext } from "react";
import { ProductContext, SearchContext } from "../../context";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductList from "./ProductList";

export default function Products({ sort }) {
  const { productData } = useContext(ProductContext);
  const { searchText } = useContext(SearchContext);
  let searchData;
  if (sort) {
    searchData = productData
      .filter((item) =>
        item.category.toLowerCase().match(searchText.toLowerCase())
      )
      .sort((a, b) => {
        return sort === "asc" ? a.price - b.price : b.price - a.price;
      });
  } else {
    searchData = productData.filter((item) =>
      item.category.toLowerCase().match(searchText.toLowerCase())
    );
  }

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {searchData && searchData.length > 0 ? (
              searchData.map((product) => (
                <ProductList product={product} key={product.id} />
              ))
            ) : (
              <>
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
