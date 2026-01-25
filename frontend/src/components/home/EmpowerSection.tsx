

function EmpowerSection() {

  const empowerCards = [
    { 
      title: "See through the noise", 
      description: "Cut through campaign ads and get straight facts",
      image: "/images/empower1.jpeg"
    },
    { 
      title: "Vote with confidence",
      description: "Make informed decisions based on real data",
      image: "/images/empower2.jpeg"
   },
    { 
      title: "Join thousands of engaged citizens", 
      description: "Be part of a community that values informed voting",
      image: "/images/empower3.jpeg"
    }
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

              {/* Background Image Section */}
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${card.image}')` }}>
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
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