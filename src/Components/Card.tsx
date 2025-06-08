import React from "react";
import type { Product } from "../types/product";

interface Props {
  products: Product;
}

const Card: React.FC<Props & { onBuy?: () => void }> = ({
  products,
  onBuy,
}) => {
  const handleBuy = (id: number) => {
    const storedCart = localStorage.getItem("cart");
    const cart: { [key: number]: number } = storedCart
      ? JSON.parse(storedCart)
      : {};

    cart[id] = (cart[id] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    if (onBuy) onBuy();
  };

  return (
    <div className="bg-white rounded-lg h-70 justify-between flex flex-col shadow-black/50 shadow-md ring-2 ring-black/10 mt-1">
      <div className="flex justify-center p-2">
        <img
          src={products.image}
          alt={products.title}
          className="h-full max-h-30 object-contain"
        />
      </div>

      <div className="max-h-30 rounded-b-lg flex justify-center flex-col gap-2">
        <p className="mx-2 text-sm font-semibold truncate">{products.title}</p>
        <p className="mx-2 text-sm text-green-700">${products.price}</p>
        <button
          onClick={() => handleBuy(products.id)}
          className="bg-gradient-to-l from-blue-700 to-purple-950 text-white rounded-md mx-2 py-1 text-sm transition mb-2 hover:cursor-pointer font-bold hover:from-purple-600 hover:to-blue-900"
        >
          BUY
        </button>
      </div>
    </div>
  );
};

export default Card;
