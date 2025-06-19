import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               <div className=" flex items-center justify-center">
              <img src="src\assests\logo.png" alt=""  width="200px" height="200px" />
            </div>
              {/* <span className="text-xl font-bold">Samruddhi Group of Company</span> */}
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner in finding the perfect property. We connect buyers, sellers, and renters with premium real estate opportunities.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-ESTATE</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@estatehub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Buy Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rent Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sell Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Market Insights</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-gray-400" />
                <div className="text-gray-400 text-sm">
                  <p>123 Real Estate Ave</p>
                  <p>San Francisco, CA 94102</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Samruddhi Group of Company. All rights reserved. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}