import { useEffect, useState } from "react";

const useProduct = (selectedCategory) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading({
          state: true,
          message: "Fetching Product Data...",
        });

        let response;
        if (selectedCategory) {
          response = await fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}`
          );
        } else {
          response = await fetch(`https://fakestoreapi.com/products/`);
        }

        if (!response.ok) {
          const errorMessage = `Fetching product data failed: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();

        setProductData(data);
        if (error) {
          setError(null);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading({
          state: false,
          message: "",
        });
      }
    };
    fetchProductData();
  }, [selectedCategory]);

  return {
    productData,
    loading,
    error,
    setProductData,
  };
};

export default useProduct;
