import React from "react";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col border-2 w-90 h-90 justify-center items-center p-8 rounded-lg bg-white ">
      <div className="h-48">
        <img src={product.image} width={120} height={200} />
      </div>
      <div className="flex flex-col justify-center items-end p-4 gap-4 w-full h-full">
        <div className="text-center white-space font-medium underline">
          {product.title}
        </div>
        <div className="flex flex-row justify-between w-full">
          <div>{product.price + " Rs"}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
