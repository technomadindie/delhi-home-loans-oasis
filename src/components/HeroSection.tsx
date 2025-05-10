
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl text-white space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Your Path to Homeownership in Delhi-NCR
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Get the best home loan rates from top banks and NBFCs. 
            Our experts guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-white text-finance-blue hover:bg-gray-100 font-semibold">
              <Link to="/contact-us">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-semibold">
              <Link to="/about-us">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave SVG for bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
