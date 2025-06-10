import { ShoppingCart, House, Truck, Shield, Headphones } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../types/product";
import Card from "../Components/Card";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const goToCart = () => {
    navigate("/cart");
  };

  const updateCartCount = () => {
    const storedCart = localStorage.getItem("cart");
    const cart: { [key: number]: number } = storedCart
      ? JSON.parse(storedCart)
      : {};
    const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    axios
      .get<Product[]>("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));

    updateCartCount();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="min-h-screen flex flex-col bg-white font-mono">
      <header className="w-full flex items-center justify-between px-4 bg-gradient-to-l from-blue-700 to-purple-950 py-4 text-white font-bold fixed z-50">
        <h1 className="text-2xl">Tech-Store</h1>
        <div className="flex-1 flex justify-end gap-4 mx-2">
          <button
            onClick={() => window.location.reload()}
            className="transition-colors duration-200 cursor-pointer hover:text-blue-300"
            aria-label="Refresh Home"
          >
            <House strokeWidth={3} />
          </button>
          <button
            onClick={goToCart}
            className="relative"
            aria-label="Go to Cart"
          >
            <ShoppingCart
              strokeWidth={3}
              className="transition-colors duration-200 cursor-pointer hover:text-blue-300"
            />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-6 px-5 sm:px-10 mb-8 pt-20">
        <section className="flex flex-col items-center justify-center rounded-2xl mx-auto w-full max-w-7xl px-6 my-4 py-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 shadow-lg">
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-2xl font-extrabold text-white mb-3 drop-shadow-lg">
              Tech-Store
            </h1>
            <p className="text-xl text-blue-100 text-center max-w-2xl font-medium drop-shadow">
              Discover the best products with amazing prices and fast delivery.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20 items-center justify-center w-full ">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <Truck className="size-16 text-yellow-300 mb-3 drop-shadow-lg w-65" />
                <h2 className="font-bold text-white text-lg">Fast Delivery</h2>
                <p className="text-blue-100 text-center">
                  Receive your products within 5 days
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="size-16 text-green-300 mb-3 drop-shadow-lg w-65" />
                <h2 className="font-bold text-white text-lg">
                  100% Secure Checkout
                </h2>
                <p className="text-blue-100 text-center">
                  SSL encryption keeps your data safe
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <Headphones className="size-16 text-pink-300 mb-3 drop-shadow-lg w-65" />
                <h2 className="font-bold text-white text-lg">24/7 Support</h2>
                <p className="text-blue-100 text-center">
                  Always available assistance
                </p>
              </div>
            </div>
          </div>
        </section>

        <h1 className="flex w-full justify-center p-2 text-4xl font-bold bg-gradient-to-r from-blue-800 via-purple-800 to-blue-800 bg-clip-text text-transparent">
          Featured Products
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-col-6 gap-4 justify-center overflow-auto sm:mx-10 mx-5 pb-2 px-2">
          {products.map((product) => (
            <Card products={product} key={product.id} onBuy={updateCartCount} />
          ))}
        </div>
      </main>

      {/* Footer colado no fim da tela */}
      <Footer />
    </div>
  );
};

export default Home;
