import { useState } from "react";
import { ProductContext } from "../context";
import useProuduct from "../hooks/useProduct";

const ProductProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { productData, error, loading } = useProuduct(selectedCategory);
  function handleSelectedCategory(category) {
    setSelectedCategory(category);
    console.log(category);
  }

  return (
    <ProductContext.Provider
      value={{
        productData,
        error,
        loading,
        selectedCategory,
        onSelectedCategory: handleSelectedCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
