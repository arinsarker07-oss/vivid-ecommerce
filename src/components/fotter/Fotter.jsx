import React from "react";
import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaPhoneAlt,
    FaEnvelope
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import FormPage from "./form";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] text-gray-500 py-16 border-t border-white/5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-2xl font-black tracking-tighter text-white">
                                AURA<span className="text-blue-500 font-light">SHOP</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Elevating your style with premium UV-protected eyewear. Experience the perfect blend of luxury, comfort, and clarity.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <FaFacebookF size={16} />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 hover:text-white transition-all duration-300">
                                <FaInstagram size={16} />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-sky-500 hover:text-white transition-all duration-300">
                                <FaTwitter size={16} />
                            </Link>
                            <Link href="#" className="p-3 rounded-full bg-white/5 hover:bg-gray-700 hover:text-white transition-all duration-300">
                                <FaGithub size={16} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Explore</h3>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link href="/" className="hover:text-blue-500 hover:ml-2 transition-all duration-300">New Arrivals</Link></li>
                            <li><Link href="/products" className="hover:text-blue-500 hover:ml-2 transition-all duration-300">Best Sellers</Link></li>
                            <li><Link href="/offers" className="hover:text-blue-500 hover:ml-2 transition-all duration-300">Limited Edition</Link></li>
                            <li><Link href="/about" className="hover:text-blue-500 hover:ml-2 transition-all duration-300">Our Story</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Support</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 rounded bg-white/5 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <HiLocationMarker size={18} />
                                </div>
                                <span>Gulshan, Dhaka, BD</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 rounded bg-white/5 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <FaPhoneAlt size={16} />
                                </div>
                                <span>+880 1700-000000</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 rounded bg-white/5 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <FaEnvelope size={16} />
                                </div>
                                <span>info@aurashop.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Newsletter</h3>
                        <p className="text-sm mb-4 leading-relaxed">Subscribe to receive updates on new drops and exclusive discounts.</p>
                        <div className="relative">
                            
                         <FormPage></FormPage>
                        </div>
                    </div>

                </div>
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[11px] uppercase tracking-[2px] text-gray-500">
                        © 2026 <span className="text-white font-bold">AURA SHOP</span> — Handcrafted in Bangladesh
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest">
                        <Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-blue-500 transition-colors">Terms</Link>
                        <Link href="/faq" className="hover:text-blue-500 transition-colors">FAQ</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;