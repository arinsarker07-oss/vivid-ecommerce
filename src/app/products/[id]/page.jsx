import React from 'react';
import { FaStar, FaShieldAlt, FaTruck, FaUndoAlt, FaShoppingCart, FaRegHeart, FaMinus, FaPlus } from 'react-icons/fa';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import Image from 'next/image';
import { GetAllProduct } from '@/lib/fetch';
import { Chip } from '@heroui/react';
import AddCard from '@/components/add-card';
import Byenow from '@/components/bye-now';

const ProductDetails = async ({ params }) => {
    const { id } = await params;
    const productsData = await GetAllProduct()
    const product = productsData.find((p) => p.id == id);

    if (!product) {
        return (
            <div className="h-screen flex items-center justify-center font-bold text-2xl">
                Product Not Found!
            </div>
        );
    }

    return (
        <div className=" bg-white py-12 px-4 sm:px-6 lg:px-8 mt-10">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start">

                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-100 border border-gray-100 shadow-sm aspect-square">
                        <Image
                            sizes='#'
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-6 left-6 bg-black text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {product.category}
                        </div>
                    </div>

                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">
                            {product.brand}
                        </span>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center bg-yellow-400/10 px-3 py-1 rounded-lg">
                                <FaStar className="text-yellow-500 mr-1" size={14} />
                                <span className="text-sm font-bold text-yellow-700">{product.rating}</span>
                            </div>
                            <span className="text-green-600 text-sm font-bold flex items-center gap-1 border-l pl-4">
                                <HiOutlineBadgeCheck size={18} /> In Stock ({product.stock})
                            </span>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-black text-gray-900">${product.price}</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            {product.description}
                        </p>

                        <div className="flex items-center gap-6 mb-10">
                            <div className="flex items-center rounded-2xl p-1 ">
                                <Chip className='text-xl p-3 font-bold' color="success"> Available</Chip>
                            </div>
                            <button className="p-4 border-2 border-gray-100 rounded-2xl hover:text-red-500 transition-all active:scale-90">
                                <FaRegHeart size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <AddCard></AddCard>
                            <Byenow></Byenow>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <FaTruck className="text-blue-600" />
                                <span className="text-xs font-bold text-gray-700">Free Delivery</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaShieldAlt className="text-green-600" />
                                <span className="text-xs font-bold text-gray-700">100% Authentic</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaUndoAlt className="text-purple-600" />
                                <span className="text-xs font-bold text-gray-700">7 Days Return</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;