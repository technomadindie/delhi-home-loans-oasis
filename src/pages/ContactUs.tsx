
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactUs = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyArea: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyArea: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 gradient-bg opacity-90" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contactUsHero')}</h1>
              <p className="text-xl opacity-90">
                {t('contactUsSubtitle')}
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-finance-blue">{t('sendUsMessage')}</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('fullName')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder={t('name')}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('emailAddress')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('phoneNumber')}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder={t('phone')}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="propertyArea" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('propertyAreaLabel')}
                      </label>
                      <Input
                        id="propertyArea"
                        name="propertyArea"
                        value={formData.propertyArea}
                        onChange={handleChange}
                        required
                        placeholder={t('propertyAreaPlaceholder')}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('messageLabel')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder={t('messagePlaceholder')}
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-finance-blue hover:bg-finance-blue-light"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('sending') : t('sendMessage')}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <div className="bg-finance-blue text-white p-8 rounded-lg shadow-md h-full">
                  <h2 className="text-2xl font-bold mb-8">{t('contactInformation')}</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{t('phone')}</h3>
                        <p className="text-gray-200 mt-1">+91 98765 43210</p>
                        <p className="text-gray-200">+91 98765 43211</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{t('email')}</h3>
                        <p className="text-gray-200 mt-1">info@homeloanexpress.com</p>
                        <p className="text-gray-200">support@homeloanexpress.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-white/10 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{t('officeAddress')}</h3>
                        <p className="text-gray-200 mt-1">
                          123 Finance Street, Connaught Place, New Delhi, 110001
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t('businessHours')}</h3>
                      <p className="text-gray-200">{t('businessHoursWeekday')}</p>
                      <p className="text-gray-200">{t('businessHoursSunday')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-finance-blue">{t('ourLocation')}</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-[16/9] bg-gray-200 rounded-md flex items-center justify-center">
                <p className="text-gray-500 text-center p-10">
                  {t('mapPlaceholder')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-finance-blue">
              {t('faq')}
            </h2>
            
            <div className="max-w-3xl mx-auto grid gap-6">
              {[
                {
                  question: t('faqDocuments'),
                  answer: t('faqDocumentsAnswer')
                },
                {
                  question: t('faqApproval'),
                  answer: t('faqApprovalAnswer')
                },
                {
                  question: t('faqCreditScore'),
                  answer: t('faqCreditScoreAnswer')
                },
                {
                  question: t('faqFees'),
                  answer: t('faqFeesAnswer')
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2 text-finance-blue">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
