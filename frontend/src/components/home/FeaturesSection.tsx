// "Everything you need" section on home page

import { Search, Users, MapPin } from "lucide-react";


function FeaturesSection() {
  const features = [
    {
      icon: <Search size={32} />,
      title: "Nonpartisan and easy to use",
      description: "Unbiased information from trusted sources, designed for everyone"
    },
    {
      icon: <Users size={32} />,
      title: "Candidates side by side",
      description: "Compare positions and voting records in one place"
    },
    {
      icon: <MapPin size={32} />,
      title: "Be prepared to cast your vote",
      description: "Find polling locations, hours, and registration info"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything you need
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Simple, comprehensive tools to help you make informed decisions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 text-white p-8 rounded-xl hover:shadow-xl transition">
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeaturesSection;