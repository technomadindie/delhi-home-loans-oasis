
import { Home, CheckCircle, BarChart3, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import LoanCalculator from "@/components/LoanCalculator";
import PartnerLogos from "@/components/PartnerLogos";

const Index = () => {
  const features = [
    {
      icon: <Home className="h-6 w-6" />,
      title: "Competitive Rates",
      description: "Access to the lowest interest rates from top banks and NBFCs in Delhi-NCR.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quick Approval",
      description: "Fast and efficient loan approval process with minimal documentation.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "Our financial experts will guide you through every step of the loan process.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Process",
      description: "Your data is protected with bank-grade security throughout the application.",
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-finance-blue">Why Choose Us</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              We offer the best home loan solutions tailored to your needs with exceptional service and support.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
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
                  Calculate Your Home Loan EMI
                </h2>
                <p className="text-gray-600 mb-6">
                  Use our home loan calculator to estimate your monthly EMI payments. Adjust the loan amount, interest rate, and tenure to see how it affects your payments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-finance-teal mr-2" />
                    <span>Instant and accurate calculation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-finance-teal mr-2" />
                    <span>Customize all loan parameters</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-finance-teal mr-2" />
                    <span>See how changes affect your EMI</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Home Loan Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Contact us today to speak with one of our home loan experts and get personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact-us" 
                className="bg-white text-finance-blue hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Contact Us Now
              </a>
              <a 
                href="tel:+919876543210" 
                className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-semibold transition-colors"
              >
                Call +91 98765 43210
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
