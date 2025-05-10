
import { CheckCircle, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 gradient-bg opacity-90" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About HomeLoan Express</h1>
              <p className="text-xl opacity-90">
                Your trusted partner for home financing solutions across Delhi-NCR.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-finance-blue">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2010, HomeLoan Express started with a simple mission: to make home ownership accessible to everyone in Delhi-NCR by providing transparent, affordable, and hassle-free home loan solutions.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, we have grown to become one of the leading home loan facilitators in the region, helping thousands of families achieve their dream of owning a home. Our success is built on our commitment to customer satisfaction, transparency, and integrity.
                </p>
                <p className="text-gray-700">
                  Today, we work with over 25+ banks and NBFCs to offer a wide range of home loan products tailored to meet the diverse needs of our customers. Whether you are a first-time home buyer or looking to refinance your existing loan, we have the expertise and resources to help you secure the best deal.
                </p>
              </div>
              
              <div className="bg-finance-blue/10 p-10 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-finance-blue">Our Achievements</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-finance-blue text-white rounded-lg w-16 h-16 flex items-center justify-center shrink-0 mr-4">
                      <span className="text-2xl font-bold">10+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Years of Experience</h4>
                      <p className="text-gray-600">Serving the Delhi-NCR region since 2010</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-finance-blue text-white rounded-lg w-16 h-16 flex items-center justify-center shrink-0 mr-4">
                      <span className="text-2xl font-bold">5K+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Happy Customers</h4>
                      <p className="text-gray-600">Helped thousands secure their dream homes</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-finance-blue text-white rounded-lg w-16 h-16 flex items-center justify-center shrink-0 mr-4">
                      <span className="text-2xl font-bold">25+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Banking Partners</h4>
                      <p className="text-gray-600">Partnerships with top banks and NBFCs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission & Vision */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-finance-blue">Our Mission & Vision</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-finance-blue">Our Mission</h3>
                  <p className="text-gray-700 mb-6">
                    To simplify the home loan process and make home ownership accessible to everyone in Delhi-NCR by providing transparent, affordable, and hassle-free solutions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>Simplify the complex home loan process</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>Provide transparent and honest advice</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>Secure the best rates for our clients</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-finance-blue">Our Vision</h3>
                  <p className="text-gray-700 mb-6">
                    To be the most trusted and preferred home loan facilitator in Delhi-NCR, known for our exceptional service, integrity, and customer-centric approach.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>Lead the industry in customer satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>Innovate in home financing solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>Expand our services across NCR</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-finance-blue">Our Leadership Team</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Meet the experienced professionals who lead our company and are dedicated to helping you achieve your home ownership goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajiv Sharma",
                  position: "Founder & CEO",
                  bio: "With over 20 years of experience in the financial sector, Rajiv founded HomeLoan Express to revolutionize the home loan process in Delhi-NCR."
                },
                {
                  name: "Priya Patel",
                  position: "Head of Operations",
                  bio: "Priya ensures our processes run smoothly and efficiently, with a focus on delivering exceptional service to every client."
                },
                {
                  name: "Amit Kumar",
                  position: "Chief Financial Advisor",
                  bio: "Amit brings his extensive knowledge of the banking sector to help our clients secure the best possible terms for their home loans."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-finance-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-finance-blue">{member.name}</h3>
                  <p className="text-finance-teal mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-4 gradient-bg">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Home Loan Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              We're here to help you every step of the way. Contact us today to speak with one of our experts.
            </p>
            <a 
              href="/contact-us" 
              className="bg-white text-finance-blue hover:bg-gray-100 px-8 py-3 rounded-md inline-block font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
