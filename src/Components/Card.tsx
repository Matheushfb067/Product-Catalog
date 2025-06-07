import React from 'react'
import type { Product } from '../types/product'

interface Props { products: Product }

const Card: React.FC<Props> = ({ products }) => {
    return (
        <div className="bg-white rounded-lg h-70 justify-between flex flex-col shadow-black/50 shadow-md">
            <div className="flex justify-center p-2">
                <img src={products.image} alt={products.title} className="h-full max-h-30 object-contain" />
            </div>

            <div className="max-h-30 rounded-b-lg flex justify-center flex-col gap-2">
                <p className="mx-2 text-sm font-semibold truncate">{products.title}</p>
                <p className="mx-2 text-sm text-green-700">${products.price}</p>
                <button className="bg-gradient-to-l from-purple-600 to-blue-700 text-white rounded-md mx-2 py-1 text-sm hover:bg-gray-800 transition mb-2 hover:cursor-pointer ">
                    Buy
                </button>
            </div>
        </div>
    )
}

export default Card