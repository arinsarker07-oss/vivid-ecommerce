'use client'
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const handlebtn = () => {
    toast.success("successfully Buy! 🎉", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}
const Byenow = () => {
    return (
        <div>
            <button onClick={handlebtn} className="flex-1 bg-blue-600 text-white  font-bold py-3 px-6 rounded-xl flex items-center gap-2 shadow-xl transform translate-y-4 hover:bg-blue-700 transition-all shadow-xl active:scale-95">
                Buy Now
            </button>
        </div>
    );
};

export default Byenow;