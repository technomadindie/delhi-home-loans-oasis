
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
