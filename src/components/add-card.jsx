'use client'
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { toast } from 'react-toastify';

const handlebtn = () => {
    toast.success("Add to Cart successfully! 🎉", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
}
const AddCard = () => {
    return (
        <div>
            <button onClick={handlebtn} className="bg-white text-black font-bold py-3 px-6 rounded-xl flex items-center gap-2 shadow-xl transform translate-y-4 hover:bg-blue-600 transition-all active:scale-95 duration-500 ">
                <FaShoppingCart size={16} />
                Add to Cart
            </button>
        </div>
    );
};

export default AddCard;