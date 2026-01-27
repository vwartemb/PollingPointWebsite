import { Users, ChevronRight } from 'lucide-react';
import SearchBar from '../components/candidates/SearchBar';
import HeroSection from '../components/home/HeroSection';
import CTASection from '../components/home/CTASection';

function CandidatesPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      

      <HeroSection
        title="Compare Candidates"
        subtitle="Review positions, voting records, and backgrounds side by side"
        showButtons={false}
        showSearchBar={false}
        showLocationDisplay={false}
        backgroundImageUrl="/images/empower3.jpeg"
      />

      <SearchBar />
      {/* Candidates by Office */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* U.S. Senate Race */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">U.S. Senator - Illinois</h2>
                <p className="text-gray-600">General Election • November 3, 2026</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                Compare All
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Candidate Card 1 - Democrat */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border-2 border-transparent hover:border-blue-500">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Users size={64} className="text-blue-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" className="w-6 h-6 rounded border-2 border-white cursor-pointer" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Democrat
                    </span>
                    <span className="ml-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Incumbent
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">Jane Doe</h3>
                  <p className="text-gray-600 text-sm mb-4">U.S. Senator (2020-Present)</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Key Positions</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Healthcare</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Education</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Climate</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Experience</h4>
                      <p className="text-sm text-gray-700">6 years in U.S. Senate, Former State Representative</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
                      View Profile
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-semibold">
                      Website
                    </button>
                  </div>
                </div>
              </div>

              {/* Candidate Card 2 - Republican */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border-2 border-transparent hover:border-blue-500">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <Users size={64} className="text-red-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" className="w-6 h-6 rounded border-2 border-white cursor-pointer" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Republican
                    </span>
                    <span className="ml-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Challenger
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">John Smith</h3>
                  <p className="text-gray-600 text-sm mb-4">Former State Senator</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Key Positions</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Economy</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Security</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Jobs</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Experience</h4>
                      <p className="text-sm text-gray-700">12 years in State Senate, Business Owner</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
                      View Profile
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-semibold">
                      Website
                    </button>
                  </div>
                </div>
              </div>

              {/* Candidate Card 3 - Green Party */}
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border-2 border-transparent hover:border-blue-500">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <Users size={64} className="text-green-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <input type="checkbox" className="w-6 h-6 rounded border-2 border-white cursor-pointer" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Green Party
                    </span>
                    <span className="ml-2 bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      Challenger
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
                  <p className="text-gray-600 text-sm mb-4">Environmental Advocate</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Key Positions</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Environment</span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Renewable Energy</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Experience</h4>
                      <p className="text-sm text-gray-700">Nonprofit Leader, Climate Activist</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
                      View Profile
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-semibold">
                      Website
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* U.S. House Race */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">U.S. Representative - 7th District</h2>
                <p className="text-gray-600">General Election • November 3, 2026</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                View All Candidates
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition">
              <Users size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">4 Candidates Running</h3>
              <p className="text-gray-600 mb-6">Compare positions and backgrounds for this race</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold">
                View Candidates
              </button>
            </div>
          </div>

          {/* State Senate Race */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">State Senator - 5th District</h2>
                <p className="text-gray-600">General Election • November 3, 2026</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                View All Candidates
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition">
              <Users size={48} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">2 Candidates Running</h3>
              <p className="text-gray-600 mb-6">Compare positions and backgrounds for this race</p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-semibold">
                View Candidates
              </button>
            </div>
          </div>

        </div>
      </section>
      <CTASection 
        title="Make an Informed Decision"
        subtitle="Compare candidates side by side to see who aligns with your values"
        buttonText="Start Comparing"
        buttonLink="/dashboard"
        variant='dark'
        //onClick={() => window.location.href = '/home'} 
      />
    </div>
  );
}

export default CandidatesPage;