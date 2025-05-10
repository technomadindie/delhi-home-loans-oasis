
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoan = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPaymentAmount =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(monthlyPaymentAmount);
  };

  return (
    <Card className="w-full">
      <CardHeader className="bg-finance-blue text-white rounded-t-lg">
        <CardTitle className="text-2xl">Home Loan Calculator</CardTitle>
        <CardDescription className="text-gray-200">
          Estimate your monthly payments
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
              <span className="font-semibold">₹{loanAmount.toLocaleString()}</span>
            </div>
            <Slider
              id="loan-amount"
              min={500000}
              max={10000000}
              step={100000}
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
              className="my-4"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="interest-rate">Interest Rate (%)</Label>
              <span className="font-semibold">{interestRate}%</span>
            </div>
            <Slider
              id="interest-rate"
              min={5}
              max={15}
              step={0.1}
              value={[interestRate]}
              onValueChange={(value) => setInterestRate(value[0])}
              className="my-4"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="loan-term">Loan Term (Years)</Label>
              <span className="font-semibold">{loanTerm} years</span>
            </div>
            <Slider
              id="loan-term"
              min={5}
              max={30}
              step={1}
              value={[loanTerm]}
              onValueChange={(value) => setLoanTerm(value[0])}
              className="my-4"
            />
          </div>

          <Button 
            onClick={calculateLoan} 
            className="w-full bg-finance-blue hover:bg-finance-blue-light"
          >
            Calculate
          </Button>

          {monthlyPayment > 0 && (
            <div className="mt-6 p-4 bg-finance-blue/10 rounded-lg">
              <p className="text-sm text-gray-600">Your estimated monthly payment:</p>
              <p className="text-2xl font-bold text-finance-blue">
                ₹{Math.round(monthlyPayment).toLocaleString()} <span className="text-sm font-normal">per month</span>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;
