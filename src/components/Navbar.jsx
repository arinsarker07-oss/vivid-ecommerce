"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarPage = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'My Profile', href: '/profile' },
  ];

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
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-600 font-bold underline underline-offset-8' 
                        : 'text-gray-700 hover:text-blue-600' 
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600">Login</Link>
            <Link href="/register" className="rounded-full bg-blue-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPage;