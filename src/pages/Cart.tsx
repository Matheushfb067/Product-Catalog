import React from "react";
import { ShoppingBag, House, Trash2 } from "lucide-react";
import Footer from "../Components/Footer";

function Cart() {
  const show = false;

  return (
    <div className="flex flex-1 flex-col w-full min-h-screen">
      <header className="w-full justify-between flex px-4 bg-gradient-to-l from-purple-600 to-blue-700 py-4 text-white font-bold">
        <h1>Fake-Store</h1>
        <House />
      </header>

      {show ? (
        <main className="flex justify-center items-center flex-col flex-1 h-full gap-4">
          <ShoppingBag className="size-30 text-black/10" />
          <p className="text-3xl font-bold">Your cart is empty</p>
          <p className="text-2xl">Add some products</p>
          <button className="bg-black text-white rounded-lg p-2 px-8">
            Keep Buying
          </button>
        </main>
      ) : null}

      {show ? null : (
        <main className="flex flex-1 justify-start items-start gap-4 px-6 py-4 flex-col">
          <h1 className="font-bold text-3xl">Shopping cart</h1>
          <div className="flex flex-1 w-full gap-4 flex-col sm:flex-row">
            <div className="flex flex-1 flex-col">
              {[
                {
                  id: 1,
                  name: "Produto 1",
                  price: 888.89,
                  image: "", // coloque o caminho da imagem se houver
                },
                {
                  id: 2,
                  name: "Produto 1",
                  price: 888.89,
                  image: "", // coloque o caminho da imagem se houver
                },
                // Adicione mais produtos conforme necessário
              ].map((product) => (
                <section
                  key={product.id}
                  className="ring-1 ring-black/10 rounded-lg flex flex-row p-4 mb-4"
                >
                  <div className="bg-black/50 rounded-lg size-30">
                    {/* <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" /> */}
                  </div>
                  <div className="flex flex-col justify-between pl-4 flex-1">
                    <h1 className="font-bold text-2xl">{product.name}</h1>
                    <h1 className="font-bold text-2xl text-blue-400 pb-1">
                      R$ {product.price.toFixed(2)}
                    </h1>
                    <div className="flex w-full flex-row justify-between items-center">
                      <div className="ring-1 ring-black/10 text-2xl flex justify-between rounded-lg gap-6 items-center">
                        <button className="hover:bg-black/5 px-2 rounded-lg flex items-center justify-center h-8 leading-none pb-1 w-8">
                          -
                        </button>
                        <button className="hover:bg-black/5 px-2 rounded-lg flex items-center justify-center h-8 leading-none pb-1 w-8">
                          +
                        </button>
                      </div>
                      <div className="hover:bg-black/5 p-1 rounded-lg">
                        <Trash2 className="text-red-400" />
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
            <section className="ring-1 ring-black/10 rounded-lg flex justify-between flex-col p-6">
              <h1 className="font-bold text-2xl">Total order summary</h1>
              <div className="flex flex-row gap-30 justify-between">
                <p className="font-bold">Price (Total):</p>
                <p>R$ 888,89</p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="font-bold">Shipping: </p>
                <p className="text-emerald-500">Free</p>
              </div>
              <div className="h-[1px] w-full bg-black/10" />
              <div className="flex flex-row justify-between font-bold text-2xl">
                <p>Total: </p>
                <p>R$ 888,89 </p>
              </div>

              <button className="bg-black text-white rounded-lg p-2 px-8">
                Checkout
              </button>
            </section>
          </div>
        </main>
      )}

      {/* Footer colado no fim da tela */}
      <Footer />
    </div>
  );
}

export default Cart;
