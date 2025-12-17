function HowItWorksSection() {
  const steps = [
    { number: "1", title: "Search your upcoming elections", description: "Enter your address to see what's on your ballot" },
    { number: "2", title: "Review candidate information", description: "Read about candidates, their positions, and voting records" },
    { number: "3", title: "Take action and participate", description: "Find your polling place and make your voice heard" }
  ];

  return (
    <section className="py-20 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Three simple steps
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          From research to participation takes just minutes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* First card that takes up full left side */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            
            {/* Gray area with background image*/}
            <div className="relative bg-gray-200 h-96 flex items-center justify-center">
              
              {/* Background image*/}
              <img
                src="/images/1simplestep.jpeg"
                alt="Step 1 Background"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="p-6">
              {/* Number */}
              <div className="relative z-10 text-2xl text-black drop-shadow-lg">
                {steps[0].number}
              </div>
              <h3 className="text-2xl font-bold mb-3">{steps[0].title}</h3>
              <p className="text-gray-600 text-lg">{steps[0].description}</p>
            </div>
          </div>

          {/* Right side - two cards stacked */}
          <div className="flex flex-col gap-6">
            {steps.slice(1).map((step, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition p-6 flex flex-col text-align left h-80 justify-center">
                   <div className="text-2xl text-black">{step.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;