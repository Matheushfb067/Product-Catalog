import { useEffect, useState } from "react";
import { ShoppingBag, House, Trash2 } from "lucide-react";
import Footer from "../Components/Footer";
import axios from "axios";
import type { Product } from "../types/product";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState<
    { product: Product; quantity: number }[]
  >([]);

  {
    /*função que tem por finalidade pegar a informação do local storage do browser para usar nesta parte do codigo*/
  }

  useEffect(() => {
    const fetchCartData = async () => {
      const storedCart = localStorage.getItem("cart");
      const cart: { [key: number]: number } = storedCart
        ? JSON.parse(storedCart)
        : {};

      if (Object.keys(cart).length === 0) {
        setCartItems([]);
        return;
      }

      try {
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
        const allProducts = response.data;

        const items = Object.entries(cart)
          .map(([id, quantity]) => {
            const product = allProducts.find((p) => p.id === Number(id));
            return product ? { product, quantity } : null;
          })
          .filter(Boolean) as { product: Product; quantity: number }[];

        setCartItems(items);
      } catch (error) {
        console.error("Failed to load cart products", error);
      }
    };

    fetchCartData();
  }, []);

  const increaseQty = (id: number) => {
    const storedCart = localStorage.getItem("cart");
    const cart: { [key: number]: number } = storedCart
      ? JSON.parse(storedCart)
      : {};
    cart[id] += 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    const storedCart = localStorage.getItem("cart");
    const cart: { [key: number]: number } = storedCart
      ? JSON.parse(storedCart)
      : {};

    if (cart[id] > 1) {
      cart[id] -= 1;
    } else {
      delete cart[id];
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    setCartItems((prev) => prev.filter((item) => cart[item.product.id]));
  };

  const removeItem = (id: number) => {
    const storedCart = localStorage.getItem("cart");
    const cart: { [key: number]: number } = storedCart
      ? JSON.parse(storedCart)
      : {};
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const show = cartItems.length === 0;

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-1 flex-col w-full min-h-screen">
      <header className="w-full justify-between flex px-4 bg-gradient-to-l from-purple-600 to-blue-700 py-4 text-white font-bold">
        <h1>Fake-Store</h1>
        <button
          onClick={goToHome}
          className="hover:text-blue-300 cursor-pointer transition-colors"
        >
          <House strokeWidth={3} className="w-6 h-6" />
        </button>
      </header>

      {show ? (
        <main className="flex justify-center items-center flex-col flex-1 h-full gap-4">
          <ShoppingBag className="size-30 text-black/10" />
          <p className="text-3xl font-bold">Your cart is empty</p>
          <p className="text-2xl">Add some products</p>
          <button
            className="bg-black text-white rounded-lg p-2 px-8 hover:bg-blue-800 cursor-pointer"
            onClick={() => (window.location.href = "/")} // or use `navigate("/")`
          >
            Keep Buying
          </button>
        </main>
      ) : (
        <main className="flex flex-1 justify-start items-start gap-4 px-6 py-4 flex-col">
          <h1 className="font-bold text-3xl">Shopping cart</h1>
          <div className="flex flex-1 w-full gap-4 flex-col sm:flex-row">
            <div className="flex flex-1 flex-col">
              {cartItems.map(({ product, quantity }) => (
                <section
                  key={product.id}
                  className="ring-1 ring-black/10 rounded-lg flex flex-row p-4 mb-4"
                >
                  <div className="bg-white rounded-lg size-30 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between pl-4 flex-1">
                    <h1 className="font-bold text-xl">{product.title}</h1>
                    <h1 className="font-bold text-blue-500">
                      R$ {product.price.toFixed(2)}
                    </h1>
                    <div className="flex w-full flex-row justify-between items-center">
                      <div className="ring-1 ring-black/10 text-2xl flex justify-between rounded-lg gap-6 items-center">
                        <button
                          onClick={() => decreaseQty(product.id)}
                          className="hover:bg-black/5 cursor-pointer px-2 rounded-lg flex items-center justify-center h-8 leading-none pb-1 w-8"
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          onClick={() => increaseQty(product.id)}
                          className="hover:bg-black/5 cursor-pointer px-2 rounded-lg flex items-center justify-center h-8 leading-none pb-1 w-8"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="hover:bg-black/5 cursor-pointer p-1 rounded-lg"
                      >
                        <Trash2 className="text-red-400" />
                      </button>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className="ring-1 ring-black/10 rounded-lg flex justify-between flex-col p-6 w-full max-w-sm">
              <h1 className="font-bold text-2xl mb-4">Total order summary</h1>
              <div className="flex flex-row justify-between">
                <p className="font-bold">Price (Total):</p>
                <p>R$ {total.toFixed(2)}</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-bold">Shipping:</p>
                <p className="text-emerald-500">Free</p>
              </div>
              <div className="h-[1px] w-full bg-black/10 my-2" />
              <div className="flex flex-row justify-between font-bold text-2xl mb-4">
                <p>Total:</p>
                <p>R$ {total.toFixed(2)}</p>
              </div>

              <button
                onClick={() => alert("Compra Finalizada!\nChega em 5 dias...")}
                className="bg-black text-white rounded-lg p-2 px-8 hover:bg-blue-800 cursor-pointer"
              >
                Checkout
              </button>
            </section>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}

export default Cart;
