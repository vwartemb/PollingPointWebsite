import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Know your candidates,<br />own your vote
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Access nonpartisan information about elections, candidates, and polling locations in seconds
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