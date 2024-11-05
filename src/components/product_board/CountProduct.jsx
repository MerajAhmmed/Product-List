import ProductCountSvg from "../svg/productSvg/ProductCountSvg";

export default function CountProduct({ cartProducts }) {
  // const { productData } = useContext(ProductContext);
  // console.log(productData);

  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 flex items-center p-2">
        <ProductCountSvg />

        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cartProducts.length}
        </span>

        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
}
