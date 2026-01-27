import { useNavigate } from 'react-router-dom';
import { MapPin, Search } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
  showSearchBar?: boolean;
  showLocationDisplay?: boolean;
  backgroundImageUrl?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

function HeroSection({
  title, 
  subtitle,
  showButtons = true,
  showSearchBar = false,
  showLocationDisplay = false,
  backgroundImageUrl = "/images/stock_image.jpeg",
  primaryButtonText = "Find My Ballot",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
    const navigate = useNavigate();
  return (
    
    <section className="relative text-white py-20 overflow-hidden">

      {/* Background image*/}
      <img
        src={backgroundImageUrl}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"/>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          {subtitle}
        </p>

        { /* Conditional Buttons */}
        {showButtons && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onPrimaryClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            {primaryButtonText}
          </button>
          <button 
            onClick={onSecondaryClick}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg"
          >
            {secondaryButtonText}
          </button>
        </div>
        )}
        
        { /* Conditional Search Bar */}
        {showSearchBar && (
          <div className="max-w-3xl bg-white rounded-lg shadow-xl p-2 flex items-center">
            <Search className="text-gray-400 ml-4" size={24} />
            <input
              type="text"
              placeholder="Enter your street address or ZIP code"
              className="flex-1 px-4 py-4 text-gray-900 text-lg focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
              Search
            </button>
          </div>
        )}

        { /* Conditional Location Display */}
        {showLocationDisplay && (
          <div className="mt-6 flex items-center text-blue-100">
            <MapPin size={20} className="mr-2" />
            <span>
              Showing elections for:{" "}
              <strong>123 Main St, Chicago, IL 60601</strong>
            </span>
            <button className="ml-4 underline hover:text-white">
              Change address
            </button>
          </div>
          )}
      </div>
    </section>
  );
}
export default HeroSection;