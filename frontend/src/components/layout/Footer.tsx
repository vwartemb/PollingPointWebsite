import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate(); 

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <MapPin className="text-blue-400 mr-2" size={28} />
              <span className="text-2xl font-bold">PollingPoint</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering voters with nonpartisan election information since 2024
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  Elections
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  Dashboard
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white transition">
                  About
                </button>
              </li>
              <li>
                <button className="hover:text-white transition">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 PollingPoint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;