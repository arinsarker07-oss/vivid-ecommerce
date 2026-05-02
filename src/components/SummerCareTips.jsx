
import { FaSun, FaWater, FaEye, FaUmbrella } from "react-icons/fa";

const SummerCareTips = () => {
  const tips = [
    {
      title: "UV Protection",
      desc: "Always wear UV400 rated sunglasses to block 99% of harmful rays.",
      icon: <FaSun className="text-orange-500" />,
      bg: "bg-orange-50"
    },
    {
      title: "Stay Hydrated",
      desc: "Keep your skin and eyes healthy by drinking at least 3 liters of water.",
      icon: <FaWater className="text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "Eye Comfort",
      desc: "Use polarized lenses to reduce glare from water and sand during summer.",
      icon: <FaEye className="text-green-500" />,
      bg: "bg-green-50"
    },
    {
      title: "Skin Shield",
      desc: "Apply sunscreen around the eyes even if you are wearing sunglasses.",
      icon: <FaUmbrella className="text-purple-500" />,
      bg: "bg-purple-50"
    }
  ];

  return (
    <section className="bg-blue-950 py-20 my-10 container mx-auto rounded-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Expert Advice</span>
          <h2 className="text-4xl font-black text-white mt-2">Summer Care Tips</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className={`w-14 h-14 rounded-2xl ${tip.bg} flex items-center justify-center text-2xl shadow-lg`}>
                {tip.icon}
              </div>
              <h3 className="text-xl font-bold text-white mt-2">{tip.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCareTips