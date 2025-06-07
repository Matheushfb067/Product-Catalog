import {ShoppingCart} from 'lucide-react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Product } from '../types/product';
import Card from '../Components/Card';
import { Links } from "react-router-dom";

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
    <div className="flex h-full w-full justify-center items-center flex-1 flex-col overflow-auto bg-black/10">

      <header className="w-full justify-between flex px-4 bg-gradient-to-l from-purple-600 to-blue-700 py-4 text-white font-bold">
        <h1>Fake-Store</h1>
        <h2>Home</h2>
        <ShoppingCart strokeWidth={3}/>
      </header>

      <div className="flex-1 flex flex-col justify-center items-start gap-6 h-full">

        <h1 className="flex w-full justify-center p-2 text-2xl font-bold">Featured Products</h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-col-6 gap-4 justify-center overflow-auto sm:mx-10 mx-5">
        
        {
          products.map(product => (
            <Card products = {product} key = {product.id}/>
          ))
        }

        </div>

      </div>

    </div>
  )
}

export default App