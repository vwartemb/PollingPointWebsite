// "Everything you need" section on home page


import React from "react";


interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  button: React.ReactNode;
}

interface FeaturesSectionProps {
  title?: string;
  description?: string;
  features: Feature[];
}

function FeaturesSection({ title = "Everything you need", description = "Simple, comprehensive tools to help you make informed decisions", features }: FeaturesSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {title}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 text-white p-8 rounded-xl hover:shadow-xl transition">
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              {feature.button && <div>{feature.button}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default FeaturesSection;
