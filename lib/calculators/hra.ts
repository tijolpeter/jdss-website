export interface HRAMonth {
  month: string;
  basicSalary: number;
  hraReceived: number;
  rentPaid: number;
}

export interface HRAMonthResult {
  month: string;
  basicSalary: number;
  hraReceived: number;
  rentPaid: number;
  hraExempted: number;
  hraTaxable: number;
  isMetro: boolean;
}

export interface HRASummary {
  totalSalary: number;
  totalHRAReceived: number;
  totalRentPaid: number;
  totalExempted: number;
  totalTaxable: number;
}

/**
 * Calculate HRA exemption for a single month.
 *
 * HRA Exemption is the MINIMUM of:
 * 1. Actual HRA received
 * 2. 50% of salary (metro) OR 40% of salary (non-metro)
 * 3. Rent paid - 10% of salary
 */
export function calculateHRAMonth(
  month: HRAMonth,
  isMetroCity: boolean
): HRAMonthResult {
  const { basicSalary, hraReceived, rentPaid } = month;

  if (basicSalary <= 0 || hraReceived <= 0) {
    return {
      ...month,
      hraExempted: 0,
      hraTaxable: hraReceived > 0 ? hraReceived : 0,
      isMetro: isMetroCity,
    };
  }

  // Condition 1: Actual HRA received
  const condition1 = hraReceived;

  // Condition 2: 50% (metro) or 40% (non-metro) of basic salary
  const condition2 = basicSalary * (isMetroCity ? 0.5 : 0.4);

  // Condition 3: Rent paid - 10% of salary
  const condition3 = Math.max(0, rentPaid - basicSalary * 0.1);

  // Exemption is minimum of all three
  const hraExempted = Math.min(condition1, condition2, condition3);
  const hraTaxable = Math.max(0, hraReceived - hraExempted);

  return {
    ...month,
    hraExempted,
    hraTaxable,
    isMetro: isMetroCity,
  };
}

export function calculateHRASummary(months: HRAMonthResult[]): HRASummary {
  return months.reduce(
    (acc, month) => ({
      totalSalary: acc.totalSalary + month.basicSalary,
      totalHRAReceived: acc.totalHRAReceived + month.hraReceived,
      totalRentPaid: acc.totalRentPaid + month.rentPaid,
      totalExempted: acc.totalExempted + month.hraExempted,
      totalTaxable: acc.totalTaxable + month.hraTaxable,
    }),
    {
      totalSalary: 0,
      totalHRAReceived: 0,
      totalRentPaid: 0,
      totalExempted: 0,
      totalTaxable: 0,
    }
  );
}

export const MONTHS = [
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
  'January',
  'February',
  'March',
];

export function createEmptyMonths(): HRAMonth[] {
  return MONTHS.map((month) => ({
    month,
    basicSalary: 0,
    hraReceived: 0,
    rentPaid: 0,
  }));
}
