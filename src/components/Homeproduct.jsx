import React from 'react';
import Image from 'next/image';
import { FaStar, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import AddCard from './add-card';


const ProductCard = ({ product }) => {
    
    return (
        <div className="group relative bg-blue-50/50 border-2 border-blue-100 rounded-[2rem] p-4 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]  flex flex-col h-full">

            {/* Badge & Wishlist */}
            <div className="absolute top-6 left-6 z-10">
                <span className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {product.category}
                </span>
            </div>
            <button className="absolute top-6 right-6 z-10 p-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:shadow-md transition-all active:scale-90">
                <FaRegHeart size={18} />
            </button>

            {/* Product Image */}
            <div className="relative w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-[#f9f9f9]">
                <Image
                    sizes='#'
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                <AddCard></AddCard>
                </div>
            </div>

            {/* Content */}
            <div className="mt-6 flex flex-col flex-grow px-2">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-tighter mb-1">{product.brand}</p>
                        <h3 className="text-lg font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                            {product.name}
                        </h3>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                        <FaStar className="text-yellow-500" size={12} />
                        <span className="text-xs font-bold text-yellow-700">{product.rating}</span>
                    </div>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                    {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price</span>
                        <span className="text-2xl font-black text-gray-900">${product.price}</span>
                    </div>
                     <Link href={`/products/${product.id}`}>
                        <button className=" p-2 font-bold rounded-2xl bg-gray-900 text-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group/btn">
                            View Details
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;