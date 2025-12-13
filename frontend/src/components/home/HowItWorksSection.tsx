

function HowItWorksSection() {
  const steps = [
    { number: "1", title: "Search your upcoming elections", description: "Enter your address to see what's on your ballot" },
    { number: "2", title: "Review candidate information", description: "Read about candidates, their positions, and voting records" },
    { number: "3", title: "Take action and participate", description: "Find your polling place and make your voice heard" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Three simple steps
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          From search to vote in minutes
        </p>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-full md:w-1/3">
                <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-600">{step.number}</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;