import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();
  return (
    <section className="relative text-white py-20 overflow-hidden">

      {/* Background image*/}
      <img
        src="/images/stock_image.jpeg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"/>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Know your candidates,<br />own your vote
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Democracy works when citizens are informed. We make it simple to research elections, compare candidates, and participate in the decisions that shape your community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            //onClick={() => navigate('home')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Find My Ballot
          </button>
          <button 
            //onClick={() => navigate('home')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;