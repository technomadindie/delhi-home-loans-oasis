
import { Home, CheckCircle, BarChart3, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import LoanCalculator from "@/components/LoanCalculator";
import PartnerLogos from "@/components/PartnerLogos";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Home className="h-6 w-6" />,
      titleKey: "competitiveRates",
      descriptionKey: "competitiveRatesDesc",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      titleKey: "quickApproval",
      descriptionKey: "quickApprovalDesc",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      titleKey: "expertGuidance",
      descriptionKey: "expertGuidanceDesc",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titleKey: "secureProcess",
      descriptionKey: "secureProcessDesc",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-finance-blue">{t('whyChooseUs')}</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              {t('whyChooseUsSub')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  titleKey={feature.titleKey}
                  descriptionKey={feature.descriptionKey}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Calculator Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-finance-blue">
                  {t('calculateEmi')}
                </h2>
                <p className="text-gray-600 mb-6">
                  {t('calculateEmiDesc')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-finance-teal mr-2" />
                    <span>{t('instantCalculation')}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-finance-teal mr-2" />
                    <span>{t('customizeParams')}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-finance-teal mr-2" />
                    <span>{t('seeChanges')}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <LoanCalculator />
              </div>
            </div>
          </div>
        </section>
        
        <PartnerLogos />
        
        {/* Call to Action */}
        <section className="py-20 px-4 gradient-bg">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('readyToStart')}</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              {t('contactUsToday')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact-us" 
                className="bg-white text-finance-blue hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                {t('contactUs')} 
              </a>
              <a 
                href="tel:+919876543210" 
                className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                {t('callNow')}
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
