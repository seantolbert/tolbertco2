import React from "react";
import { usePrintify } from "../hooks/usePrintify";

const Shirts = () => {
  const { products, isLoading } = usePrintify();

  return (
    <div className="h-screen flex items-center justify-center" id="shirts">
      <h1>Shirts</h1>
      <div className="grid grid-cols-4 gap-2">
        {products?.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <div className="flex gap-2">
              <img
                src={product.images[0].src}
                alt={product.title}
                className="rounded-lg"
              />
              {/* <img
                src={product.images[1].src}
                alt={product.title}
                className="rounded-lg"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shirts;
