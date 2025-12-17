export interface EMIInput {
  principal: number;
  annualRate: number;
  tenure: number; // in months
}

export interface EMIResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  principal: number;
}

export function calculateEMI(input: EMIInput): EMIResult {
  const { principal, annualRate, tenure } = input;

  if (principal <= 0 || tenure <= 0) {
    return {
      emi: 0,
      totalInterest: 0,
      totalPayment: 0,
      principal: 0,
    };
  }

  const monthlyRate = annualRate / 12 / 100;

  // If interest rate is 0, simple division
  if (monthlyRate === 0) {
    const emi = principal / tenure;
    return {
      emi,
      totalInterest: 0,
      totalPayment: principal,
      principal,
    };
  }

  // EMI Formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);

  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - principal;

  return {
    emi,
    totalInterest,
    totalPayment,
    principal,
  };
}

export function formatIndianCurrency(amount: number): string {
  if (isNaN(amount) || !isFinite(amount)) return '₹0';

  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(Math.round(amount));
}
