
const banks = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "LIC Housing Finance"
];

const PartnerLogos = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-finance-blue">Our Banking Partners</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We work with the most trusted banks and financial institutions to get you the best home loan rates in Delhi-NCR.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {banks.map((bank, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-24 card-hover"
            >
              <span className="font-semibold text-finance-blue text-center">{bank}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
