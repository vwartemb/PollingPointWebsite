import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Menu, X, ChevronDown } from 'lucide-react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  
  // Regular navigation links (maps to routes)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Elections', path: '/elections' },
    { name: 'Candidates', path: '/candidates' },
  ];

  // Dropdown menu items
  const learnMoreLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Voter Guide', path: '/voter-guide' },
    { name: 'Resources', path: '/resources' },
  ];

  const CTALinks = [
    { name: 'Register To Vote', path: '/dashboard' },
    { name: 'Find My Ballot', path: '/find-ballot' }
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition">
            <MapPin className="text-blue-600 mr-2" size={28} />
            <span className="text-2xl font-bold text-gray-900">PollingPoint</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Regular Links */}
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition ${
                  location.pathname === link.path
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Learn More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Dropdown Trigger */}
              <button
                className={`flex items-center gap-1 transition ${
                  learnMoreLinks.some(link => location.pathname === link.path)
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Learn More
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  {learnMoreLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2 transition ${
                        location.pathname === link.path
                          ? 'bg-blue-50 text-blue-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {CTALinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {/* Regular Links */}
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded transition ${
                  location.pathname === link.path
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : 'hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Learn More Section in Mobile */}
            <div className="px-4 py-2">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full text-gray-700 font-medium"
              >
                Learn More
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {/* Mobile Dropdown Items */}
              {dropdownOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {learnMoreLinks.map(link => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDropdownOpen(false);
                      }}
                      className={`block px-4 py-2 rounded transition ${
                        location.pathname === link.path
                          ? 'bg-blue-100 text-blue-600 font-semibold'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA Button */}
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-center"
            >
              Find My Ballot
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;