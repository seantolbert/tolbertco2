import axios from "axios";
import { useState, useEffect } from "react";

export const usePrintify = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(import.meta.env.VITE_PRINTIFY_API_KEY);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const res = await axios.get(
          `/api/shops/${import.meta.env.VITE_PRINTIFY_STORE_ID}/products.json`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_PRINTIFY_API_KEY}`,
            },
          }
        );

        setProducts(res.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
        setProducts(null);
        setIsLoading(false);
      }
    };

    fetchProductInfo();
  }, []);

  return { products, isLoading };
};
