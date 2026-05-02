'use client'
import React from 'react';
import { IoSendSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';

const FormPage = () => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.target.reset();
                toast.success("Subscribed successfully! 🎉", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }}
            className="relative"
        >
            <input
                type="email"
                required
                name="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-blue-500 focus:bg-white/10 transition-all shadow-inner"
            />
            <button
                type="submit"
                className="absolute right-2 top-1.5 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-all active:scale-90"
            >
                <IoSendSharp size={18} />
            </button>
        </form>
    );
};

export default FormPage;