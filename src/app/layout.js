import { Geist, Geist_Mono, Inter, } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/components/Navbar";
import Footer from "@/components/fotter/Fotter";
import { ToastContainer } from "react-toastify";
import { Providers } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aura shop",
  description: "crate by arin",
};

export default function RootLayout({ children }) {
  return (
<html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {/* min-h-screen এবং bg-inherit যোগ করা হয়েছে */}
   <body className={`${inter.className} min-h-screen flex flex-col transition-colors duration-300`}>
        <Providers>
          <NavbarPage />
          
          {/* children কে main এর ভেতরে রাখলে ডার্ক মোড পুরো পেজে ছড়াবে */}
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
        </Providers>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
