import { MapPin } from "lucide-react";

function EmpowerSection() {
  const empowerCards = [
    { title: "See through the noise", description: "Cut through campaign ads and get straight facts" },
    { title: "Vote with confidence", description: "Make informed decisions based on real data" },
    { title: "Join thousands of engaged citizens", description: "Be part of a community that values informed voting" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Empower your voice
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Democracy works best when voters are informed
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {empowerCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                <MapPin size={64} className="text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default EmpowerSection;