import { ShoppingCart, House } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../types/product";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart");
  };

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
        <House strokeWidth={3} />
        <button onClick={goToCart}>
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
      <Footer />
    </div>
  );
};

export default Home;
