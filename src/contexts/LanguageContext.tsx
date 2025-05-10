
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'hi';

// Define translation type
export type Translations = {
  [key: string]: {
    en: string;
    hi: string;
  };
};

// Create translations object
export const translations: Translations = {
  // Navbar
  home: {
    en: 'Home',
    hi: 'होम',
  },
  aboutUs: {
    en: 'About Us',
    hi: 'हमारे बारे में',
  },
  contactUs: {
    en: 'Contact Us',
    hi: 'संपर्क करें',
  },
  applyNow: {
    en: 'Apply Now',
    hi: 'अभी आवेदन करें',
  },
  // Home page
  heroTitle: {
    en: 'Get the Best Home Loan Deals in Delhi-NCR',
    hi: 'दिल्ली-एनसीआर में सर्वोत्तम होम लोन डील प्राप्त करें',
  },
  heroSubtitle: {
    en: 'Partnered with 25+ banks and NBFCs to provide you the lowest interest rates and fastest approval',
    hi: 'आपको सबसे कम ब्याज दरें और सबसे तेज़ मंजूरी प्रदान करने के लिए 25+ बैंकों और एनबीएफसी के साथ साझेदारी',
  },
  whyChooseUs: {
    en: 'Why Choose Us',
    hi: 'हमें क्यों चुनें',
  },
  whyChooseUsSub: {
    en: 'We offer the best home loan solutions tailored to your needs with exceptional service and support.',
    hi: 'हम आपकी जरूरतों के अनुसार उत्कृष्ट सेवा और समर्थन के साथ सर्वोत्तम होम लोन समाधान प्रदान करते हैं।',
  },
  // Features
  competitiveRates: {
    en: 'Competitive Rates',
    hi: 'प्रतिस्पर्धी दरें',
  },
  competitiveRatesDesc: {
    en: 'Access to the lowest interest rates from top banks and NBFCs in Delhi-NCR.',
    hi: 'दिल्ली-एनसीआर के शीर्ष बैंकों और एनबीएफसी से सबसे कम ब्याज दरों तक पहुंच।',
  },
  quickApproval: {
    en: 'Quick Approval',
    hi: 'त्वरित अनुमोदन',
  },
  quickApprovalDesc: {
    en: 'Fast and efficient loan approval process with minimal documentation.',
    hi: 'न्यूनतम दस्तावेज़ीकरण के साथ तेज़ और कुशल ऋण अनुमोदन प्रक्रिया।',
  },
  expertGuidance: {
    en: 'Expert Guidance',
    hi: 'विशेषज्ञ मार्गदर्शन',
  },
  expertGuidanceDesc: {
    en: 'Our financial experts will guide you through every step of the loan process.',
    hi: 'हमारे वित्तीय विशेषज्ञ आपको ऋण प्रक्रिया के हर कदम में मार्गदर्शन करेंगे।',
  },
  secureProcess: {
    en: 'Secure Process',
    hi: 'सुरक्षित प्रक्रिया',
  },
  secureProcessDesc: {
    en: 'Your data is protected with bank-grade security throughout the application.',
    hi: 'आपका डेटा पूरे आवेदन में बैंक-ग्रेड सुरक्षा के साथ संरक्षित है।',
  },
  // Contact Form
  name: {
    en: 'Name',
    hi: 'नाम',
  },
  email: {
    en: 'Email Address',
    hi: 'ईमेल पता',
  },
  phone: {
    en: 'Phone Number',
    hi: 'फोन नंबर',
  },
  propertyArea: {
    en: 'Property Area',
    hi: 'संपत्ति क्षेत्र',
  },
  message: {
    en: 'Message',
    hi: 'संदेश',
  },
  submit: {
    en: 'Submit',
    hi: 'भेजें',
  },
  // Loan Calculator
  calculateEmi: {
    en: 'Calculate Your Home Loan EMI',
    hi: 'अपने होम लोन ईएमआई की गणना करें',
  },
  calculateEmiDesc: {
    en: 'Use our home loan calculator to estimate your monthly EMI payments. Adjust the loan amount, interest rate, and tenure to see how it affects your payments.',
    hi: 'अपने मासिक ईएमआई भुगतानों का अनुमान लगाने के लिए हमारे होम लोन कैलकुलेटर का उपयोग करें। अपने भुगतानों पर इसके प्रभाव को देखने के लिए ऋण राशि, ब्याज दर और अवधि को समायोजित करें।',
  },
  // Additional translations for Home page after EMI section
  instantCalculation: {
    en: 'Instant and accurate calculation',
    hi: 'त्वरित और सटीक गणना',
  },
  customizeParams: {
    en: 'Customize all loan parameters',
    hi: 'सभी ऋण पैरामीटर अनुकूलित करें',
  },
  seeChanges: {
    en: 'See how changes affect your EMI',
    hi: 'देखें कि परिवर्तन आपके ईएमआई को कैसे प्रभावित करते हैं',
  },
  readyToStart: {
    en: 'Ready to Start Your Home Loan Journey?',
    hi: 'अपनी होम लोन यात्रा शुरू करने के लिए तैयार हैं?',
  },
  contactUsToday: {
    en: 'Contact us today to speak with one of our home loan experts and get personalized assistance.',
    hi: 'हमारे होम लोन विशेषज्ञों में से एक से बात करने और व्यक्तिगत सहायता प्राप्त करने के लिए आज ही हमसे संपर्क करें।',
  },
  callNow: {
    en: 'Call +91 98765 43210',
    hi: 'कॉल करें +91 98765 43210',
  },
  // About Us Page
  aboutHeroTitle: {
    en: 'About HomeLoan Express',
    hi: 'होमलोन एक्सप्रेस के बारे में',
  },
  aboutHeroSubtitle: {
    en: 'Your trusted partner for home financing solutions across Delhi-NCR.',
    hi: 'दिल्ली-एनसीआर में होम फाइनेंसिंग समाधानों के लिए आपका विश्वसनीय साथी।',
  },
  ourStory: {
    en: 'Our Story',
    hi: 'हमारी कहानी',
  },
  ourStoryP1: {
    en: 'Founded in 2010, HomeLoan Express started with a simple mission: to make home ownership accessible to everyone in Delhi-NCR by providing transparent, affordable, and hassle-free home loan solutions.',
    hi: 'होमलोन एक्सप्रेस की स्थापना 2010 में एक सरल मिशन के साथ हुई थी: पारदर्शी, किफायती और परेशानी मुक्त होम लोन समाधान प्रदान करके दिल्ली-एनसीआर में सभी के लिए घर का मालिकाना हक सुलभ बनाना।',
  },
  ourStoryP2: {
    en: 'Over the years, we have grown to become one of the leading home loan facilitators in the region, helping thousands of families achieve their dream of owning a home. Our success is built on our commitment to customer satisfaction, transparency, and integrity.',
    hi: 'वर्षों से, हम इस क्षेत्र में अग्रणी होम लोन फैसिलिटेटर्स में से एक बन गए हैं, हजारों परिवारों को अपना घर खरीदने का सपना पूरा करने में मदद कर रहे हैं। हमारी सफलता ग्राहक संतुष्टि, पारदर्शिता और ईमानदारी के प्रति हमारी प्रतिबद्धता पर आधारित है।',
  },
  ourStoryP3: {
    en: 'Today, we work with over 25+ banks and NBFCs to offer a wide range of home loan products tailored to meet the diverse needs of our customers. Whether you are a first-time home buyer or looking to refinance your existing loan, we have the expertise and resources to help you secure the best deal.',
    hi: 'आज, हम 25+ से अधिक बैंकों और एनबीएफसी के साथ काम करते हैं ताकि हम अपने ग्राहकों की विविध जरूरतों को पूरा करने के लिए होम लोन उत्पादों की एक विस्तृत श्रृंखला प्रदान कर सकें। चाहे आप पहली बार घर खरीदने वाले हों या अपने मौजूदा ऋण को रीफाइनेंस करना चाहते हों, हमारे पास आपको सर्वोत्तम डील सुनिश्चित करने में मदद करने के लिए विशेषज्ञता और संसाधन हैं।',
  },
  ourAchievements: {
    en: 'Our Achievements',
    hi: 'हमारी उपलब्धियां',
  },
  yearsOfExperience: {
    en: 'Years of Experience',
    hi: 'अनुभव के वर्ष',
  },
  servingSince: {
    en: 'Serving the Delhi-NCR region since 2010',
    hi: '2010 से दिल्ली-एनसीआर क्षेत्र की सेवा',
  },
  happyCustomers: {
    en: 'Happy Customers',
    hi: 'संतुष्ट ग्राहक',
  },
  helpedThousands: {
    en: 'Helped thousands secure their dream homes',
    hi: 'हजारों लोगों को अपने सपनों के घर सुरक्षित करने में मदद की',
  },
  bankingPartners: {
    en: 'Banking Partners',
    hi: 'बैंकिंग भागीदार',
  },
  partnershipsWithBanks: {
    en: 'Partnerships with top banks and NBFCs',
    hi: 'शीर्ष बैंकों और एनबीएफसी के साथ साझेदारी',
  },
  ourMissionVision: {
    en: 'Our Mission & Vision',
    hi: 'हमारा मिशन और विजन',
  },
  ourMission: {
    en: 'Our Mission',
    hi: 'हमारा मिशन',
  },
  missionDesc: {
    en: 'To simplify the home loan process and make home ownership accessible to everyone in Delhi-NCR by providing transparent, affordable, and hassle-free solutions.',
    hi: 'होम लोन प्रक्रिया को सरल बनाना और पारदर्शी, किफायती और परेशानी मुक्त समाधान प्रदान करके दिल्ली-एनसीआर में सभी के लिए घर का मालिकाना हक सुलभ बनाना।',
  },
  simplifyProcess: {
    en: 'Simplify the complex home loan process',
    hi: 'जटिल होम लोन प्रक्रिया को सरल बनाना',
  },
  provideTransparency: {
    en: 'Provide transparent and honest advice',
    hi: 'पारदर्शी और ईमानदार सलाह प्रदान करना',
  },
  secureBestRates: {
    en: 'Secure the best rates for our clients',
    hi: 'अपने ग्राहकों के लिए सर्वोत्तम दरों को सुरक्षित करना',
  },
  ourVision: {
    en: 'Our Vision',
    hi: 'हमारा विजन',
  },
  visionDesc: {
    en: 'To be the most trusted and preferred home loan facilitator in Delhi-NCR, known for our exceptional service, integrity, and customer-centric approach.',
    hi: 'दिल्ली-एनसीआर में सबसे विश्वसनीय और पसंदीदा होम लोन फैसिलिटेटर बनना, जो हमारी उत्कृष्ट सेवा, ईमानदारी और ग्राहक-केंद्रित दृष्टिकोण के लिए जाना जाता है।',
  },
  leadIndustry: {
    en: 'Lead the industry in customer satisfaction',
    hi: 'ग्राहक संतुष्टि में उद्योग का नेतृत्व करना',
  },
  innovateFinancing: {
    en: 'Innovate in home financing solutions',
    hi: 'होम फाइनेंसिंग समाधानों में नवाचार करना',
  },
  expandServices: {
    en: 'Expand our services across NCR',
    hi: 'एनसीआर भर में हमारी सेवाओं का विस्तार करना',
  },
  ourLeadershipTeam: {
    en: 'Our Leadership Team',
    hi: 'हमारी नेतृत्व टीम',
  },
  leadershipDesc: {
    en: 'Meet the experienced professionals who lead our company and are dedicated to helping you achieve your home ownership goals.',
    hi: 'अनुभवी पेशेवरों से मिलें जो हमारी कंपनी का नेतृत्व करते हैं और आपके घर के स्वामित्व के लक्ष्यों को प्राप्त करने में मदद करने के लिए समर्पित हैं।',
  },
  founderCEO: {
    en: 'Founder & CEO',
    hi: 'संस्थापक और सीईओ',
  },
  founderDesc: {
    en: 'With over 20 years of experience in the financial sector, Rajiv founded HomeLoan Express to revolutionize the home loan process in Delhi-NCR.',
    hi: 'वित्तीय क्षेत्र में 20 वर्षों से अधिक के अनुभव के साथ, राजीव ने दिल्ली-एनसीआर में होम लोन प्रक्रिया में क्रांति लाने के लिए होमलोन एक्सप्रेस की स्थापना की।',
  },
  headOfOperations: {
    en: 'Head of Operations',
    hi: 'संचालन प्रमुख',
  },
  operationsDesc: {
    en: 'Priya ensures our processes run smoothly and efficiently, with a focus on delivering exceptional service to every client.',
    hi: 'प्रिया सुनिश्चित करती हैं कि हमारी प्रक्रियाएं सुचारू रूप से और कुशलता से चलें, हर ग्राहक को उत्कृष्ट सेवा प्रदान करने पर ध्यान केंद्रित करें।',
  },
  financialAdvisor: {
    en: 'Chief Financial Advisor',
    hi: 'मुख्य वित्तीय सलाहकार',
  },
  advisorDesc: {
    en: 'Amit brings his extensive knowledge of the banking sector to help our clients secure the best possible terms for their home loans.',
    hi: 'अमित बैंकिंग क्षेत्र के अपने व्यापक ज्ञान को हमारे ग्राहकों को उनके होम लोन के लिए सर्वोत्तम संभावित शर्तों को सुरक्षित करने में मदद करने के लिए लाते हैं।',
  },
  readyToStartCTA: {
    en: 'Ready to Start Your Home Loan Journey?',
    hi: 'अपनी होम लोन यात्रा शुरू करने के लिए तैयार हैं?',
  },
  ctaDesc: {
    en: "We're here to help you every step of the way. Contact us today to speak with one of our experts.",
    hi: 'हम आपकी हर कदम पर मदद करने के लिए यहां हैं। हमारे किसी एक विशेषज्ञ से बात करने के लिए आज ही हमसे संपर्क करें।',
  },
  getInTouch: {
    en: 'Get in Touch',
    hi: 'संपर्क करें',
  },
  // Contact Us Page
  contactUsHero: {
    en: 'Contact Us',
    hi: 'संपर्क करें',
  },
  contactUsSubtitle: {
    en: 'Get in touch with our team for any queries or assistance with home loans.',
    hi: 'होम लोन से संबंधित किसी भी प्रश्न या सहायता के लिए हमारी टीम से संपर्क करें।',
  },
  sendUsMessage: {
    en: 'Send Us a Message',
    hi: 'हमें संदेश भेजें',
  },
  fullName: {
    en: 'Full Name*',
    hi: 'पूरा नाम*',
  },
  emailAddress: {
    en: 'Email Address*',
    hi: 'ईमेल पता*',
  },
  phoneNumber: {
    en: 'Phone Number*',
    hi: 'फोन नंबर*',
  },
  propertyAreaLabel: {
    en: 'Property Area*',
    hi: 'संपत्ति क्षेत्र*',
  },
  propertyAreaPlaceholder: {
    en: 'Where are you thinking of buying?',
    hi: 'आप कहां खरीदने के बारे में सोच रहे हैं?',
  },
  messageLabel: {
    en: 'Message*',
    hi: 'संदेश*',
  },
  messagePlaceholder: {
    en: 'Tell us about your requirements',
    hi: 'हमें अपनी आवश्यकताओं के बारे में बताएं',
  },
  sendMessage: {
    en: 'Send Message',
    hi: 'संदेश भेजें',
  },
  sending: {
    en: 'Sending...',
    hi: 'भेज रहा है...',
  },
  contactInformation: {
    en: 'Contact Information',
    hi: 'संपर्क जानकारी',
  },
  phone: {
    en: 'Phone',
    hi: 'फोन',
  },
  email: {
    en: 'Email',
    hi: 'ईमेल',
  },
  officeAddress: {
    en: 'Office Address',
    hi: 'कार्यालय का पता',
  },
  businessHours: {
    en: 'Business Hours',
    hi: 'व्यापार के घंटे',
  },
  businessHoursWeekday: {
    en: 'Monday - Saturday: 10:00 AM - 7:00 PM',
    hi: 'सोमवार - शनिवार: सुबह 10:00 बजे - शाम 7:00 बजे',
  },
  businessHoursSunday: {
    en: 'Sunday: Closed',
    hi: 'रविवार: बंद',
  },
  ourLocation: {
    en: 'Our Location',
    hi: 'हमारा स्थान',
  },
  mapPlaceholder: {
    en: 'Map Placeholder - Google Maps would be embedded here showing location in Delhi-NCR',
    hi: 'नक्शा प्लेसहोल्डर - गूगल मैप्स यहां दिल्ली-एनसीआर में स्थान दिखाता है',
  },
  faq: {
    en: 'Frequently Asked Questions',
    hi: 'अक्सर पूछे जाने वाले प्रश्न',
  },
  faqDocuments: {
    en: 'What documents are required for a home loan application?',
    hi: 'होम लोन आवेदन के लिए किन दस्तावेजों की आवश्यकता होती है?',
  },
  faqDocumentsAnswer: {
    en: "Typically, you'll need identity proof, address proof, income proof (salary slips or tax returns), property documents, and bank statements for the last 6 months.",
    hi: 'आम तौर पर, आपको पहचान प्रमाण, पता प्रमाण, आय प्रमाण (वेतन पर्ची या कर रिटर्न), संपत्ति दस्तावेज और पिछले 6 महीनों के बैंक स्टेटमेंट की आवश्यकता होगी।',
  },
  faqApproval: {
    en: 'How long does the loan approval process take?',
    hi: 'ऋण अनुमोदन प्रक्रिया में कितना समय लगता है?',
  },
  faqApprovalAnswer: {
    en: 'Our loan approval process usually takes 3-7 business days once all documents are submitted. We work to expedite the process for our clients.',
    hi: 'सभी दस्तावेज जमा करने के बाद हमारी ऋण अनुमोदन प्रक्रिया आमतौर पर 3-7 कार्य दिवसों में पूरी हो जाती है। हम अपने ग्राहकों के लिए प्रक्रिया को तेज करने के लिए काम करते हैं।',
  },
  faqCreditScore: {
    en: 'What is the minimum credit score required for a home loan?',
    hi: 'होम लोन के लिए न्यूनतम क्रेडिट स्कोर कितना होना चाहिए?',
  },
  faqCreditScoreAnswer: {
    en: 'Most of our partner banks require a minimum credit score of 700, though some options may be available for scores between 650-700.',
    hi: 'हमारे अधिकांश साझेदार बैंकों को न्यूनतम 700 का क्रेडिट स्कोर चाहिए, हालांकि 650-700 के बीच के स्कोर के लिए कुछ विकल्प उपलब्ध हो सकते हैं।',
  },
  faqFees: {
    en: 'Do you charge any fees for your services?',
    hi: 'क्या आप अपनी सेवाओं के लिए कोई शुल्क लेते हैं?',
  },
  faqFeesAnswer: {
    en: 'Our initial consultation and basic services are free. We may charge processing fees for specialized services, which will be clearly communicated upfront.',
    hi: 'हमारी प्रारंभिक परामर्श और बुनियादी सेवाएं निःशुल्क हैं। हम विशेष सेवाओं के लिए प्रोसेसिंग शुल्क ले सकते हैं, जिसके बारे में पहले से स्पष्ट रूप से बताया जाएगा।',
  },
  // Hero section for Home page
  homeHeroTitle: {
    en: 'Your Path to Homeownership in Delhi-NCR',
    hi: 'दिल्ली-एनसीआर में आपका घर का मालिक बनने का रास्ता',
  },
  homeHeroSubtitle: {
    en: 'Get the best home loan rates from top banks and NBFCs. Our experts guide you through every step of the process.',
    hi: 'शीर्ष बैंकों और एनबीएफसी से सर्वोत्तम होम लोन दरें प्राप्त करें। हमारे विशेषज्ञ आपको प्रक्रिया के हर चरण में मार्गदर्शन करते हैं।',
  },
  getStarted: {
    en: 'Get Started',
    hi: 'शुरू करें',
  },
  learnMore: {
    en: 'Learn More',
    hi: 'और जानें',
  },
};

// Create context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Create provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key; // Fallback to key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
