import {
  Search,
  Calendar,
  Users,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Filter,
  MapPin,
  Check,
  Clock,
} from "lucide-react";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import QuickStats from "../components/elections/QuickStats";
import ElectionsCards from "../components/elections/ElectionsCards";
import { getVoterInfo, type VoterInfoResponse, type PollingLocation } from "../services/Civicservice";
import { useState } from "react";

function ElectionsPage() {
  const [address, setAddress] = useState(''); // changes when user types
  const [searchedAddress, setSearchedAddress] = useState(''); // the address thats submitted
  const [voterInfo, setVoterInfo] = useState<VoterInfoResponse | null>(null); // the api result
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {

    if(!address.trim()) {
      setError("Please enter an address");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const data = await getVoterInfo(address); // get backend api call with address
      // then save the response data to state
      setVoterInfo(data);
      setSearchedAddress(address);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to fetch voter information. Please try again.";
      setError(message);
      setVoterInfo(null); // clear previous data on error
      console.error('Search error:', err);  // for debugging
    } finally {
      setLoading(false);
    }
  };

  // if the user presses enter, trigger search
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const renderPollingLocation = (location: PollingLocation, index: number) => (
    <div key={index} className="bg-white rounded-lg shadow-md p-6 hover: shadow-lg transition">
      <div className = "flex items-start gap-3 mb-3">
        <MapPin className = "text-blue-600 mt-1" size={20} />
        <div>
          {location.address.locationName && (
            <h4 className="font-semibold text-lg mb-1">{location.address.locationName}</h4>
          )}
          <p className="text-gray-700">
            {location.address.line1}<br />
            {location.address.city}, {location.address.state} {location.address.zip}
          </p>
        </div>
      </div>

      {location.pollingHours && (
        <div className="flex items-start gap-3 text-gray-600 mt-3">
          <Clock size={18} className="mt-1" />
          <p>{location.pollingHours}</p>
        </div>
      )}

      {location.notes && (
        <div className="mt-3 p-3 bg-blue-50 rounded text-sm text-gray-700">
          {location.notes}
        </div>
      )}
    </div>
  );
  
  return (
    <>
      <HeroSection
        title="Find Your Elections"
        subtitle="Enter your address to see all upcoming elections in your area."
        showButtons={false}
        showSearchBar={true}
        showLocationDisplay={true}
        backgroundImageUrl="/images/ctabackground.jpeg"
        searchValue={address}
        onSearchChange={setAddress}
        onSearch={handleSearch}
        onSearchKeyPress={handleKeyPress}
        searchedAddress={searchedAddress}
        loading={loading}
      />

      {error && (
        <div className="max-w-3xl mx-auto px-6 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {voterInfo && (
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-6">Your Polling Locations</h2>
          {voterInfo.data.pollingLocations && voterInfo.data.pollingLocations.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {voterInfo.data.pollingLocations.map((location, i) => renderPollingLocation(location, i))}
            </div>
          ) : (
            <p className="text-gray-500">No polling locations found for this address.</p>
          )}
        </section>
      )}

      <QuickStats />
      <ElectionsCards />

      <FeaturesSection
        title="Voter Resources"
        description="Tools and resources to help you prepare for election day"
        features={[
          {
            icon: <CheckCircle className="text-green-400 mb-4" size={32} />,
            title: "Check Registration",
            description:
              "Verify your voter registration status and update if needed",
            button: (
              <button className="text-blue-400 font-semibold hover:text-blue-300">
                Check Now →
              </button>
            ),
          },
          {
            icon: <MapPin className="text-blue-400 mb-4" size={32} />,
            title: "Polling Locations",
            description: "Find your polling place with hours and directions",
            button: (
              <button className="text-blue-400 font-semibold hover:text-blue-300">
                Find Location →
              </button>
            ),
          },
          {
            icon: <Calendar className="text-purple-400 mb-4" size={32} />,
            title: "Important Dates",
            description: "Registration deadlines and early voting periods",
            button: (
              <button className="text-blue-400 font-semibold hover:text-blue-300">
                View Calendar →
              </button>
            ),
          },
        ]}
      />
    </>
  );
}

export default ElectionsPage;
