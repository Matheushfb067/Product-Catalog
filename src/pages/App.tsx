import {ShoppingCart} from 'lucide-react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Product } from '../types/products';

const App = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<Product[]>('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="flex h-screen w-screen justify-center items-center flex-1 flex-col">

      <header className="w-full justify-between flex px-4 bg-gradient-to-l from-purple-600 to-blue-700 py-4 text-white font-bold">
        <h1>Fake-Store</h1>
        <ShoppingCart strokeWidth={3}/>
      </header>

      <div className="flex-1 flex flex-col justify-center items-start gap-6 h-full">

        <h1 className="flex w-full justify-center p-2 text-2xl font-bold">Featured Products</h1>

        <div className="flex-1 flex justify-center itens-start w-full gap-2">

          <div className="bg-black/10 w-40 rounded-lg h-60 justify-between flex flex-col ring-black/10 ring-2">
            <div className="flex justify-center">
              hello world
            </div>
            
            <div className="bg-white h-1/2 rounded-b-lg flex justify-center flex-col gap-2">
              <p className="mx-2">Titulo</p>
              <p className="mx-2">price</p>
              <button className="bg-black text-white rounded-lg mx-2 py-1">Buy</button>
            </div>
          </div>

          <div className="bg-black/10 w-40 rounded-lg h-60 justify-between flex flex-col ring-black/10 ring-2">
            <div className="flex justify-center">
              hello world
            </div>

            <div className="bg-white h-1/2 rounded-b-lg flex justify-center flex-col gap-2">
              <p className="mx-2">Titulo</p>
              <p className="mx-2">price</p>
              <button className="bg-black text-white rounded-lg mx-2 py-1">Buy</button>
            </div>
          </div>

          <div className="bg-black/10 w-40 rounded-lg h-60 justify-between flex flex-col ring-black/10 ring-2">
            <div className="flex justify-center">
              hello world
            </div>

            <div className="bg-white h-1/2 rounded-b-lg flex justify-center flex-col gap-2">
              <p className="mx-2">Titulo</p>
              <p className="mx-2">price</p>
              <button className="bg-black text-white rounded-lg mx-2 py-1">Buy</button>
            </div>
          </div>
          <div className="bg-black/10 w-40 rounded-lg h-60 justify-between flex flex-col ring-black/10 ring-2">
            <div className="flex justify-center">
              hello world
            </div>

            <div className="bg-white h-1/2 rounded-b-lg flex justify-center flex-col gap-2">
              <p className="mx-2">Titulo</p>
              <p className="mx-2">price</p>
              <button className="bg-black text-white rounded-lg mx-2 py-1">Buy</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App