import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaFireAlt } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative w-full p-10 flex items-center overflow-hidden ">
            <div className="absolute top-[-40%] left-[-10%] w-100 h-72 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-[-45%] right-[-10%] w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-60"></div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 z-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold tracking-wide">
                            <FaFireAlt className="animate-pulse" />
                            HOT DEALS FOR THIS SEASON
                        </div>
               <h1 className="text-5xl md:text-7xl font-black dark:text-white text-gray-900 leading-[1.1] tracking-tighter">
                            Summer Sale <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                50% OFF
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Discover our premium collection of UV-protected eyewear. 
                            Style meets protection in every pair. Grab yours before the sun sets on this offer!
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Link 
                                href="/products" 
                                className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-blue-600 active:scale-95 "
                            >
                                Shop Collection
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            <Link 
                                href="/offers" 
                                className="px-8 py-4 rounded-full font-bold text-gray-700 hover:bg-white border border-transparent hover:border-gray-200 transition-all"
                            >
                                View Offers
                            </Link>
                        </div>
                        <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale">
                            <div className="text-center">
                                <p className="font-bold text-xl text-gray-900">12k+</p>
                                <p className="text-xs uppercase tracking-widest">Customers</p>
                            </div>
                            <div className="w-[1px] h-10 bg-gray-300"></div>
                            <div className="text-center">
                                <p className="font-bold text-xl text-gray-900">Premium</p>
                                <p className="text-xs uppercase tracking-widest">Quality</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-10 flex justify-center items-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-blue-600/10 bg-blue-950 rounded-[40px] rotate-6 translate-x-4"></div>
                            
                            {/* Main Image */}
                            <div className="relative h-full w-full rounded-[40px] overflow-hidden bg-gradient-to-br from-gray-100 to-white shadow-2xl">
                                <Image 
                                    sizes='#'
                                    src="/hero.png" 
                                    alt="Summer Sale Banner"
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 hidden md:block animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                        %
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase">Limited Time</p>
                                        <p className="text-sm font-black text-gray-900">Extra 10% for Students</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;