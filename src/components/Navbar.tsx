
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-finance-blue font-display text-2xl font-bold">HomeLoan</span>
            <span className="text-finance-teal font-display text-2xl font-bold">Express</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-finance-blue font-medium">{t('home')}</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-finance-blue font-medium">{t('aboutUs')}</Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-finance-blue font-medium">{t('contactUs')}</Link>
            <Button className="bg-finance-blue hover:bg-finance-blue-light">{t('applyNow')}</Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-finance-blue font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/about-us" 
                className="text-gray-700 hover:text-finance-blue font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('aboutUs')}
              </Link>
              <Link 
                to="/contact-us" 
                className="text-gray-700 hover:text-finance-blue font-medium px-4 py-2 rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('contactUs')}
              </Link>
              <Button className="bg-finance-blue hover:bg-finance-blue-light mx-4">{t('applyNow')}</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
