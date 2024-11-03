import { useContext } from "react";
import { ProductContext } from "../../context";
import ProductCardSvg from "../svg/productSvg/ProductCardSvg";

export default function ProductCard() {
  const { productData, loading, error } = useContext(ProductContext);
  console.log(productData);

  console.log(productData);

  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productData.map((product) => (
              <div key={product.id} className="relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
                  <img
                    src={product.image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
                  />
                </div>
                <div className="mt-4 px-3 pb-4">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>

                <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1  hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
                  <div className="flex px-3 py-2 justify-center">
                    <ProductCardSvg />
                    Add To Cart
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
