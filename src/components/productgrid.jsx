import ProductCard from "./Homeproduct";
import { GetAllProduct } from "@/lib/fetch";


export async function ProductGrid () {
    const Allproduct= await GetAllProduct()
  return (
    <section className="py-20 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tighter">Summer Essential <span className="text-blue-600">Drops</span></h2>
            <p className="text-gray-500 mt-2 font-medium">Explore the most trending products of this season.</p>
          </div>
          <button className="text-sm font-bold text-gray-900 border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
            View All Products
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Allproduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}