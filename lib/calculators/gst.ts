export type SaleType = 'inter-state' | 'intra-state';
export type GSTRate = 0 | 0.25 | 3 | 5 | 12 | 18 | 28;

export interface GSTRow {
  id: string;
  saleType: SaleType;
  taxRate: GSTRate;
  taxableAmount: number;
  cessRate: number;
}

export interface GSTRowResult {
  igst: number;
  cgst: number;
  sgst: number;
  cess: number;
  totalTax: number;
}

export interface GSTSummary {
  totalTaxable: number;
  totalIGST: number;
  totalCGST: number;
  totalSGST: number;
  totalCess: number;
  grandTotalTax: number;
}

export function calculateGSTRow(row: GSTRow): GSTRowResult {
  const { saleType, taxRate, taxableAmount, cessRate } = row;

  if (taxableAmount <= 0) {
    return {
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
      totalTax: 0,
    };
  }

  const taxAmount = taxableAmount * (taxRate / 100);
  const cess = taxableAmount * ((cessRate || 0) / 100);

  if (saleType === 'inter-state') {
    return {
      igst: taxAmount,
      cgst: 0,
      sgst: 0,
      cess,
      totalTax: taxAmount + cess,
    };
  } else {
    const halfTax = taxAmount / 2;
    return {
      igst: 0,
      cgst: halfTax,
      sgst: halfTax,
      cess,
      totalTax: taxAmount + cess,
    };
  }
}

export function calculateGSTSummary(rows: GSTRow[]): GSTSummary {
  let totalTaxable = 0;
  let totalIGST = 0;
  let totalCGST = 0;
  let totalSGST = 0;
  let totalCess = 0;
  let grandTotalTax = 0;

  for (const row of rows) {
    const result = calculateGSTRow(row);
    totalTaxable += row.taxableAmount;
    totalIGST += result.igst;
    totalCGST += result.cgst;
    totalSGST += result.sgst;
    totalCess += result.cess;
    grandTotalTax += result.totalTax;
  }

  return {
    totalTaxable,
    totalIGST,
    totalCGST,
    totalSGST,
    totalCess,
    grandTotalTax,
  };
}

export const GST_RATES: GSTRate[] = [0, 0.25, 3, 5, 12, 18, 28];

export function createEmptyGSTRow(): GSTRow {
  return {
    id: crypto.randomUUID(),
    saleType: 'intra-state',
    taxRate: 18,
    taxableAmount: 0,
    cessRate: 0,
  };
}
