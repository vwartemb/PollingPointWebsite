import { Search, Calendar, Users, CheckCircle, AlertCircle, ChevronRight, Filter, MapPin, Check } from 'lucide-react';
import FeaturesSection from "../components/home/FeaturesSection";

function ElectionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section with Address Input */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Elections</h1>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl">
            Enter your address to see all upcoming elections in your area
          </p>
          
          {/* Address Search Bar */}
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

          {/* Current Location Display (after search) */}
          <div className="mt-6 flex items-center text-blue-100">
            <MapPin size={20} className="mr-2" />
            <span>Showing elections for: <strong>123 Main St, Chicago, IL 60601</strong></span>
            <button className="ml-4 underline hover:text-white">Change address</button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">3</div>
              <div className="text-gray-600 mt-2">Upcoming Elections</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">12</div>
              <div className="text-gray-600 mt-2">Candidates to Review</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">45</div>
              <div className="text-gray-600 mt-2">Days Until Next Election</div>
            </div>
          </div>
        </div>
      </section>

      {/* Elections Timeline */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Your Elections</h2>
            <button className="flex items-center text-blue-600 hover:text-blue-700">
              <Filter size={20} className="mr-2" />
              Filter by type
            </button>
          </div>

          {/* Election Cards */}
          <div className="space-y-6">
            {/* Upcoming Election - Featured */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-300 shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Next Election
                    </span>
                    <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      General Election
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    2026 General Election
                  </h3>
                  
                  <div className="flex items-center text-gray-700 mb-4">
                    <Calendar size={20} className="mr-2" />
                    <span className="font-semibold">Tuesday, November 3, 2026</span>
                    <span className="mx-3">•</span>
                    <span className="text-blue-600 font-semibold">45 days away</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="text-green-600 mr-2" size={20} />
                      <span className="text-sm">Registered to vote</span>
                    </div>
                    <div className="flex items-center">
                      <AlertCircle className="text-orange-500 mr-2" size={20} />
                      <span className="text-sm">Early voting starts Oct 20</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-blue-600 mr-2" size={20} />
                      <span className="text-sm">3 polling locations nearby</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">On Your Ballot:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• U.S. Senator - Illinois</li>
                      <li>• U.S. Representative - 7th Congressional District</li>
                      <li>• State Senator - 5th District</li>
                      <li>• Cook County Board President</li>
                      <li>• Chicago City Council - Ward 42</li>
                    </ul>
                  </div>
                </div>

                <div className="ml-6 flex flex-col gap-3">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">
                    View My Ballot
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 whitespace-nowrap">
                    Find Polling Place
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 whitespace-nowrap">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>

            {/* Other Upcoming Elections */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="bg-gray-200 px-3 py-1 rounded-full text-sm font-semibold text-gray-700 mb-3 inline-block">
                    Primary Election
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    2026 Illinois Primary Election
                  </h3>
                  
                  <div className="flex items-center text-gray-700 mb-4">
                    <Calendar size={20} className="mr-2" />
                    <span>Tuesday, March 17, 2026</span>
                    <span className="mx-3">•</span>
                    <span className="text-gray-600">165 days away</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    Vote for party nominees for state and local offices
                  </p>
                </div>

                <button className="ml-6 flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  View Details
                  <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>

            {/* Past Election */}
            <div className="bg-gray-100 rounded-xl p-6 opacity-75">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className="bg-gray-300 px-3 py-1 rounded-full text-sm font-semibold text-gray-600 mb-3 inline-block">
                    Completed
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    2024 Presidential Election
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar size={20} className="mr-2" />
                    <span>November 5, 2024</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    View results and voter turnout statistics
                  </p>
                </div>

                <button className="ml-6 flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  View Results
                  <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection 
        title="Voter Resources"
        description="Tools and resources to help you prepare for election day"
        features={[
          {
            icon: <CheckCircle className="text-green-400 mb-4" size={32} />,
            title: "Check Registration",
            description: "Verify your voter registration status and update if needed",
            button: <button className="text-blue-400 font-semibold hover:text-blue-300">Check Now →</button>,
          },
          {
            icon: <MapPin className="text-blue-400 mb-4" size={32} />,
            title: "Polling Locations",
            description: "Find your polling place with hours and directions",
            button: <button className="text-blue-400 font-semibold hover:text-blue-300">Find Location →</button>,
          },
          {
            icon: <Calendar className="text-purple-400 mb-4" size={32} />,
            title: "Important Dates",
            description: "Registration deadlines and early voting periods",
            button: <button className="text-blue-400 font-semibold hover:text-blue-300">View Calendar →</button>,
          }
        ]}  
      />

    </div>
  );
}

export default ElectionsPage;