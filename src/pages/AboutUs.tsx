
import { CheckCircle, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 gradient-bg opacity-90" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('aboutHeroTitle')}</h1>
              <p className="text-xl opacity-90">
                {t('aboutHeroSubtitle')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-finance-blue">{t('ourStory')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('ourStoryP1')}
                </p>
                <p className="text-gray-700 mb-4">
                  {t('ourStoryP2')}
                </p>
                <p className="text-gray-700">
                  {t('ourStoryP3')}
                </p>
              </div>
              
              <div className="bg-finance-blue/10 p-10 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-finance-blue">{t('ourAchievements')}</h3>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="bg-finance-blue text-white rounded-lg w-16 h-16 flex items-center justify-center shrink-0 mr-4">
                      <span className="text-2xl font-bold">10+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{t('yearsOfExperience')}</h4>
                      <p className="text-gray-600">{t('servingSince')}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-finance-blue text-white rounded-lg w-16 h-16 flex items-center justify-center shrink-0 mr-4">
                      <span className="text-2xl font-bold">5K+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{t('happyCustomers')}</h4>
                      <p className="text-gray-600">{t('helpedThousands')}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-finance-blue text-white rounded-lg w-16 h-16 flex items-center justify-center shrink-0 mr-4">
                      <span className="text-2xl font-bold">25+</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{t('bankingPartners')}</h4>
                      <p className="text-gray-600">{t('partnershipsWithBanks')}</p>
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
              <h2 className="text-3xl font-bold mb-12 text-center text-finance-blue">{t('ourMissionVision')}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-finance-blue">{t('ourMission')}</h3>
                  <p className="text-gray-700 mb-6">
                    {t('missionDesc')}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>{t('simplifyProcess')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>{t('provideTransparency')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>{t('secureBestRates')}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4 text-finance-blue">{t('ourVision')}</h3>
                  <p className="text-gray-700 mb-6">
                    {t('visionDesc')}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>{t('leadIndustry')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>{t('innovateFinancing')}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-finance-teal mr-2 mt-1" />
                      <span>{t('expandServices')}</span>
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
            <h2 className="text-3xl font-bold mb-6 text-center text-finance-blue">{t('ourLeadershipTeam')}</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              {t('leadershipDesc')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajiv Sharma",
                  position: t('founderCEO'),
                  bio: t('founderDesc')
                },
                {
                  name: "Priya Patel",
                  position: t('headOfOperations'),
                  bio: t('operationsDesc')
                },
                {
                  name: "Amit Kumar",
                  position: t('financialAdvisor'),
                  bio: t('advisorDesc')
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
            <h2 className="text-3xl font-bold mb-6">{t('readyToStartCTA')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t('ctaDesc')}
            </p>
            <a 
              href="/contact-us" 
              className="bg-white text-finance-blue hover:bg-gray-100 px-8 py-3 rounded-md inline-block font-semibold transition-colors"
            >
              {t('getInTouch')}
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
