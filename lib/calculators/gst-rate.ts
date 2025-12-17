export interface GSTRateInput {
  invoiceDate: Date;
  supplyDate: Date;
  paymentDate: Date;
  rateChangeDate: Date;
  oldRate: number;
  newRate: number;
}

export interface GSTRateResult {
  applicableRate: number;
  explanation: string;
  rule: string;
}

/**
 * Determines the applicable GST rate based on transitional provisions.
 *
 * Rules:
 * - If any two of (invoice, supply, payment) occur before rate change: OLD rate applies
 * - Otherwise: NEW rate applies
 */
export function determineGSTRate(input: GSTRateInput): GSTRateResult {
  const { invoiceDate, supplyDate, paymentDate, rateChangeDate, oldRate, newRate } = input;

  const isInvoiceBeforeChange = invoiceDate < rateChangeDate;
  const isSupplyBeforeChange = supplyDate < rateChangeDate;
  const isPaymentBeforeChange = paymentDate < rateChangeDate;

  // Count how many events occurred before the rate change
  const countBeforeChange = [isInvoiceBeforeChange, isSupplyBeforeChange, isPaymentBeforeChange]
    .filter(Boolean).length;

  // If 2 or more events before change date, old rate applies
  if (countBeforeChange >= 2) {
    const events = [];
    if (isInvoiceBeforeChange) events.push('Invoice');
    if (isSupplyBeforeChange) events.push('Supply');
    if (isPaymentBeforeChange) events.push('Payment');

    return {
      applicableRate: oldRate,
      explanation: `${events.join(' and ')} occurred before the rate change date.`,
      rule: 'Since at least two of the three events (Invoice, Supply, Payment) occurred before the rate change, the OLD rate applies.',
    };
  }

  // Otherwise, new rate applies
  const events = [];
  if (!isInvoiceBeforeChange) events.push('Invoice');
  if (!isSupplyBeforeChange) events.push('Supply');
  if (!isPaymentBeforeChange) events.push('Payment');

  return {
    applicableRate: newRate,
    explanation: `${events.join(' and ')} occurred on or after the rate change date.`,
    rule: 'Since fewer than two events occurred before the rate change, the NEW rate applies.',
  };
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

// Default rate change date (can be customized)
export const DEFAULT_RATE_CHANGE_DATE = new Date('2025-09-22');
