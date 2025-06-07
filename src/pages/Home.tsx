import {
  ShoppingCart,
  Instagram,
  Facebook,
  Twitter,
  PhoneCall,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../types/product";
import Card from "../Components/Card";
import Cart from "../pages/Cart";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<Product[]>("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="min-h-screen flex flex-col bg-black/10">
      <header className="w-full justify-between flex px-4 bg-gradient-to-l from-purple-600 to-blue-700 py-4 text-white font-bold">
        <h1>Fake-Store</h1>
        <h2>Home</h2>
        <button>
          <ShoppingCart strokeWidth={3} />
        </button>
      </header>

      <main className="flex-1 flex flex-col gap-6 px-5 sm:px-10 mb-8">
        <h1 className="flex w-full justify-center p-2 text-2xl font-bold">
          Featured Products
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-col-6 gap-4 justify-center overflow-auto sm:mx-10 mx-5 pb-2 px-2">
          {products.map((product) => (
            <Card products={product} key={product.id} />
          ))}
        </div>
      </main>

      {/* Footer colado no fim da tela */}
      <footer className="mt-auto w-full flex flex-col px-4 bg-gray-900 text-white py-5 min-h-full">
        <h1 className="text-blue-400 text-lg font-bold mb-2">Fake-Store</h1>
        <p className="mb-4">
          Your online store with the best products and prices on the market.
        </p>
        <h1 className="text-blue-400 text-lg font-bold mb-4">Contacts</h1>
        <div className="flex items-center gap-2">
          <PhoneCall />
          <p className="mb-4">(XX) XXXX-XXXX</p>
        </div>
        <div className="flex flex-row px-2 gap-3 mb-4">
          <Instagram strokeWidth={1.5} size={24} />
          <Facebook strokeWidth={1.5} size={24} />
          <Twitter strokeWidth={1.5} size={24} />
        </div>
        <div className="border-t border-white/20 pt-4">
          {" "}
          {/* Linha sutil */}
          <p className="text-lg text-white/80 flex justify-center items-center">
            © 2024 TechStore. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
