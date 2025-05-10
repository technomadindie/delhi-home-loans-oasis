
import { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureCardProps {
  icon: ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const FeatureCard = ({ icon, titleKey, descriptionKey }: FeatureCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
      <div className="bg-finance-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <div className="text-finance-blue">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-finance-blue">{t(titleKey)}</h3>
      <p className="text-gray-600">{t(descriptionKey)}</p>
    </div>
  );
};

export default FeatureCard;
