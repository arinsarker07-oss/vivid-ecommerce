
import { Card } from "@heroui/react";
import { FaCrown, FaCheckCircle, FaStar, FaGem } from "react-icons/fa";

const TopBrands = () => {
  const brands = [
    { name: "Ray-Ban", icon: <FaCrown />, desc: "Premium Eyewear" },
    { name: "Nike", icon: <FaCheckCircle />, desc: "Sporty & Durable" },
    { name: "Gucci", icon: <FaGem />, desc: "Luxury Lifestyle" },
    { name: "Oakley", icon: <FaStar />, desc: "Advanced Protection" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-black text-gray-900">Top Brands</h2>
          <p className="text-gray-500 mt-2">Explore the world's most trusted eyewear labels.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <Card key={index} className="border-none shadow-sm bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all cursor-pointer py-4">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl">
                {brand.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg text-gray-800">{brand.name}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{brand.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TopBrands