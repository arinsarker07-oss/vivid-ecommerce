import React from "react";
import Link from "next/link";

const NavbarPage = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <div className="flex items-center">
            <Link href="/" className="group flex items-center gap-1">
              <span className="text-2xl font-extrabold tracking-tighter text-black transition group-hover:text-cyan-800">AURA</span>
              <span className="text-2xl font-bold tracking-tighter text-blue-600">SHOP</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
              <Link href="/profile" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">My Profile</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600">Login</Link>
            <Link href="/register" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-200">Sign Up</Link>
          </div>

          <div className="md:hidden flex items-center">
            <label htmlFor="menu-toggle" className="cursor-pointer p-2 rounded-md text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      <div className="hidden peer-checked:block md:hidden bg-white border-b border-gray-200">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Products</Link>
          <Link href="/profile" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">My Profile</Link>
          <div className="pt-4 pb-3 border-t border-gray-100">
            <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600">Login</Link>
            <Link href="/register" className="block px-3 py-2 text-base font-medium text-blue-600">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;