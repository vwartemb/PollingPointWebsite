import { Search, Filter, X, } from 'lucide-react';
import { useState } from 'react';

function SearchBar() {
    const [showFilters, setShowFilters] = useState(false);

    return (
      // Filter and Search Bar 
      <section className="bg-white border-b py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-4 py-3">
              <Search className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Search candidates by name or office..."
                className="flex-1 bg-transparent focus:outline-none text-gray-900"
              />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-semibold"
            >
              <Filter size={20} />
              Filters
              {showFilters && <X size={16} />}
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Compare Selected
            </button>
          </div>

          {/* Filter Pills (when active) */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-200">
                All Offices
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                U.S. Senate
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                U.S. House
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                State Legislature
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300">
                Local Offices
              </button>
            </div>
          )}
        </div>
      </section>
    );
}

export default SearchBar;