import ProductCountSvg from "../svg/productSvg/ProductCountSvg";

export default function CountProduct() {
  return (
    <div className="flow-root">
      <a href="#" className="group -m-2 flex items-center p-2">
        <ProductCountSvg />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </a>
    </div>
  );
}
