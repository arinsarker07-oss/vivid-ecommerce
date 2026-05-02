"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white px-4">
      {/* Animated Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
          404
        </h1>
        
        <h2 className="mt-4 text-2xl md:text-3xl font-light text-gray-400">
          Oops! You've drifted into <span className="text-purple-400 font-medium">the void.</span>
        </h2>
        
        <p className="mt-6 text-gray-500 max-w-md mx-auto">
          The page you're looking for disappeared or never existed. Let's get you back to familiar territory.
        </p>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10"
        >
          <Link 
            href="/"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-400 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="w-12 h-12 border-2 border-white/10 rounded-xl rotate-12" />
      </motion.div>
    </div>
  );
}