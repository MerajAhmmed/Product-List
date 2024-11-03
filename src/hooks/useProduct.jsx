import { useEffect, useState } from "react";

const useProduct = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchProductData = async () => {
    try {
      setLoading({
        state: true,
        message: "Fetching Product Data...",
      });

      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        const errorMessage = `Fetching product data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setProductData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return {
    productData,
    loading,
    error,
  };
};

export default useProduct;
