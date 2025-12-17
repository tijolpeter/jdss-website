export interface TDSSection {
  section: string;
  description: string;
  rateWithPAN: number;
  rateWithoutPAN: number;
  threshold?: number;
  notes?: string;
}

export interface TDSInput {
  section: string;
  hasPAN: boolean;
  amount: number;
}

export interface TDSResult {
  rate: number;
  tdsAmount: number;
  netAmount: number;
  section: TDSSection | undefined;
}

export const TDS_SECTIONS_FY2526: TDSSection[] = [
  {
    section: '192',
    description: 'Salary',
    rateWithPAN: 0,
    rateWithoutPAN: 20,
    notes: 'As per applicable income tax slab rates',
  },
  {
    section: '192A',
    description: 'Premature PF withdrawal',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 50000,
  },
  {
    section: '193',
    description: 'Interest on Securities',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 10000,
  },
  {
    section: '194',
    description: 'Dividends',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 5000,
  },
  {
    section: '194A',
    description: 'Interest (other than on securities)',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 40000,
    notes: '₹50,000 for senior citizens',
  },
  {
    section: '194B',
    description: 'Lottery/Crossword Puzzle winnings',
    rateWithPAN: 30,
    rateWithoutPAN: 30,
    threshold: 10000,
  },
  {
    section: '194BA',
    description: 'Online Gaming winnings',
    rateWithPAN: 30,
    rateWithoutPAN: 30,
  },
  {
    section: '194BB',
    description: 'Horse Race winnings',
    rateWithPAN: 30,
    rateWithoutPAN: 30,
    threshold: 10000,
  },
  {
    section: '194C - Individual/HUF',
    description: 'Contractor Payment (Individual/HUF)',
    rateWithPAN: 1,
    rateWithoutPAN: 20,
    threshold: 30000,
    notes: 'Single payment ₹30,000 or aggregate ₹1,00,000',
  },
  {
    section: '194C - Others',
    description: 'Contractor Payment (Others)',
    rateWithPAN: 2,
    rateWithoutPAN: 20,
    threshold: 30000,
    notes: 'Single payment ₹30,000 or aggregate ₹1,00,000',
  },
  {
    section: '194D',
    description: 'Insurance Commission',
    rateWithPAN: 5,
    rateWithoutPAN: 20,
    threshold: 15000,
  },
  {
    section: '194DA',
    description: 'Life Insurance Policy payout',
    rateWithPAN: 5,
    rateWithoutPAN: 20,
    threshold: 100000,
  },
  {
    section: '194E',
    description: 'Non-resident Sportsmen/Entertainers',
    rateWithPAN: 20,
    rateWithoutPAN: 20,
  },
  {
    section: '194EE',
    description: 'NSS deposits',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 2500,
  },
  {
    section: '194F',
    description: 'Repurchase of MF/UTI units',
    rateWithPAN: 20,
    rateWithoutPAN: 20,
  },
  {
    section: '194G',
    description: 'Lottery Commission',
    rateWithPAN: 2,
    rateWithoutPAN: 20,
    threshold: 15000,
  },
  {
    section: '194H',
    description: 'Commission/Brokerage',
    rateWithPAN: 5,
    rateWithoutPAN: 20,
    threshold: 15000,
  },
  {
    section: '194I(a)',
    description: 'Rent - Plant/Machinery/Equipment',
    rateWithPAN: 2,
    rateWithoutPAN: 20,
    threshold: 240000,
  },
  {
    section: '194I(b)',
    description: 'Rent - Land/Building/Furniture',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 240000,
  },
  {
    section: '194IA',
    description: 'Transfer of Immovable Property',
    rateWithPAN: 1,
    rateWithoutPAN: 20,
    threshold: 5000000,
    notes: 'Property value exceeding ₹50 lakhs',
  },
  {
    section: '194IB',
    description: 'Rent by Individual/HUF (not covered u/s 194I)',
    rateWithPAN: 5,
    rateWithoutPAN: 20,
    threshold: 50000,
    notes: 'Monthly rent exceeding ₹50,000',
  },
  {
    section: '194IC',
    description: 'Joint Development Agreement',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
  },
  {
    section: '194J(a)',
    description: 'Technical Services/Royalty (call centre)',
    rateWithPAN: 2,
    rateWithoutPAN: 20,
    threshold: 30000,
  },
  {
    section: '194J(b)',
    description: 'Professional/Director Fees',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 30000,
  },
  {
    section: '194K',
    description: 'Mutual Fund Income',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 5000,
  },
  {
    section: '194LA',
    description: 'Compensation on Land Acquisition',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 250000,
  },
  {
    section: '194LB',
    description: 'Interest from Infrastructure Debt Fund',
    rateWithPAN: 5,
    rateWithoutPAN: 20,
  },
  {
    section: '194LC',
    description: 'Interest from Indian Company (Foreign Currency)',
    rateWithPAN: 5,
    rateWithoutPAN: 20,
    notes: '4% for certain bonds',
  },
  {
    section: '194LD',
    description: 'Interest on G-Sec/Rupee Bonds to FII/QFI',
    rateWithPAN: 5,
    rateWithoutPAN: 20,
  },
  {
    section: '194M',
    description: 'Commission/Brokerage/Contract by Individual/HUF',
    rateWithPAN: 5,
    rateWithoutPAN: 20,
    threshold: 5000000,
  },
  {
    section: '194N',
    description: 'Cash Withdrawal',
    rateWithPAN: 2,
    rateWithoutPAN: 20,
    threshold: 10000000,
    notes: '2% for exceeding ₹1 Cr (5% for non-filers)',
  },
  {
    section: '194O',
    description: 'E-commerce Operator',
    rateWithPAN: 1,
    rateWithoutPAN: 20,
  },
  {
    section: '194P',
    description: 'Senior Citizen (75+) - Specified Bank',
    rateWithPAN: 0,
    rateWithoutPAN: 0,
    notes: 'Tax deducted as per slab by bank',
  },
  {
    section: '194Q',
    description: 'Purchase of Goods',
    rateWithPAN: 0.1,
    rateWithoutPAN: 5,
    threshold: 5000000,
    notes: 'Amount exceeding ₹50 lakhs',
  },
  {
    section: '194R',
    description: 'Benefits/Perquisites in Business',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    threshold: 20000,
  },
  {
    section: '194S',
    description: 'Virtual Digital Assets (Crypto)',
    rateWithPAN: 1,
    rateWithoutPAN: 20,
    threshold: 50000,
    notes: '₹10,000 for specified persons',
  },
  {
    section: '194T',
    description: 'Partnership Firm - Partner payments',
    rateWithPAN: 10,
    rateWithoutPAN: 20,
    notes: 'Effective from FY 2025-26',
  },
  {
    section: '195',
    description: 'Payments to Non-Residents',
    rateWithPAN: 0,
    rateWithoutPAN: 0,
    notes: 'Rate depends on nature of income and DTAA',
  },
  {
    section: '196A',
    description: 'Income from Units (NR/Foreign Co.)',
    rateWithPAN: 20,
    rateWithoutPAN: 20,
  },
  {
    section: '196B',
    description: 'Income from Units to Offshore Fund',
    rateWithPAN: 12.5,
    rateWithoutPAN: 12.5,
  },
  {
    section: '196C',
    description: 'Income from Foreign Currency Bonds/GDR',
    rateWithPAN: 12.5,
    rateWithoutPAN: 12.5,
  },
  {
    section: '196D',
    description: 'FII Income from Securities',
    rateWithPAN: 20,
    rateWithoutPAN: 20,
  },
];

export function calculateTDS(input: TDSInput): TDSResult {
  const { section, hasPAN, amount } = input;

  const sectionData = TDS_SECTIONS_FY2526.find((s) => s.section === section);

  if (!sectionData || amount <= 0) {
    return {
      rate: 0,
      tdsAmount: 0,
      netAmount: amount,
      section: sectionData,
    };
  }

  const rate = hasPAN ? sectionData.rateWithPAN : sectionData.rateWithoutPAN;
  const tdsAmount = amount * (rate / 100);
  const netAmount = amount - tdsAmount;

  return {
    rate,
    tdsAmount,
    netAmount,
    section: sectionData,
  };
}
