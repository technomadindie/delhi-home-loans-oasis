
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-finance-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HomeLoan Express</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for home loans in Delhi-NCR. Get the best rates from top banks and NBFCs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Apply for Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Home Loans</li>
              <li className="text-gray-300">Property Loans</li>
              <li className="text-gray-300">Loan Against Property</li>
              <li className="text-gray-300">Loan Refinancing</li>
              <li className="text-gray-300">Home Loan Balance Transfer</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <span>info@homeloanexpress.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>123 Finance Street, Connaught Place, New Delhi, 110001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HomeLoan Express. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
