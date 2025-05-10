
import { Languages } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">EN</span>
      <div className="flex items-center gap-1">
        <Switch 
          checked={language === 'hi'}
          onCheckedChange={toggleLanguage}
          aria-label="Toggle language"
        />
        <Languages className="h-4 w-4 text-gray-600" />
      </div>
      <span className="text-sm font-medium">हिंदी</span>
    </div>
  );
};

export default LanguageSwitcher;
