import { useState } from "react";
import { ProductContext } from "../context";
import useProuduct from "../hooks/useProduct";

const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const { productData, error, loading, setProductData } =
    useProuduct(selectedCategory);
  function handleSelectedCategory(category) {
    setSelectedCategory(category);
  }

  return (
    <ProductContext.Provider
      value={{
        productData,
        error,
        loading,
        selectedCategory,
        onSelectedCategory: handleSelectedCategory,
        setProductData,
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
