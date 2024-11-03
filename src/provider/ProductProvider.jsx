import { ProductContext } from "../context";
import useProuduct from "../hooks/useProduct";

const ProductProvider = ({ children }) => {
  const { productData, error, loading } = useProuduct();
  return (
    <ProductContext.Provider value={{ productData, error, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
