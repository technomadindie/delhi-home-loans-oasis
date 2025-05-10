
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
      <div className="bg-finance-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <div className="text-finance-blue">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-finance-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
