'use client';

import { useState, useEffect } from 'react';
import { calculateEMI, formatIndianCurrency, type EMIResult } from '@/lib/calculators/emi';
import { PieChart } from './calculator-chart';

export function EMICalculator() {
  const [principal, setPrincipal] = useState<string>('1000000');
  const [rate, setRate] = useState<string>('10');
  const [tenure, setTenure] = useState<string>('12');
  const [result, setResult] = useState<EMIResult | null>(null);

  useEffect(() => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) || 0;
    const t = parseInt(tenure) || 0;

    if (p > 0 && t > 0) {
      const calculated = calculateEMI({
        principal: p,
        annualRate: r,
        tenure: t,
      });
      setResult(calculated);
    } else {
      setResult(null);
    }
  }, [principal, rate, tenure]);

  const chartData = result
    ? [
        { label: 'Principal', value: result.principal, color: '#0d9488' },
        { label: 'Interest', value: result.totalInterest, color: '#f97316' },
      ]
    : [];

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="bg-white rounded-xl p-6 border border-border">
        <h3 className="font-semibold text-secondary-900 mb-6">Loan Details</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter loan amount"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Interest Rate (% P.A.)
            </label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter interest rate"
              min="0"
              max="50"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Loan Tenure (Months)
            </label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter tenure in months"
              min="1"
              max="360"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Installment Type
            </label>
            <select
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
              defaultValue="monthly"
            >
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && result.emi > 0 && (
        <>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
            <p className="text-sm text-primary-700 mb-2">Monthly EMI</p>
            <p className="text-4xl font-bold text-primary-900">
              {formatIndianCurrency(result.emi)}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-border">
              <p className="text-sm text-secondary-600 mb-1">Principal Amount</p>
              <p className="text-xl font-semibold text-secondary-900">
                {formatIndianCurrency(result.principal)}
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border">
              <p className="text-sm text-secondary-600 mb-1">Total Interest</p>
              <p className="text-xl font-semibold text-accent-orange">
                {formatIndianCurrency(result.totalInterest)}
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border">
              <p className="text-sm text-secondary-600 mb-1">Total Payment</p>
              <p className="text-xl font-semibold text-secondary-900">
                {formatIndianCurrency(result.totalPayment)}
              </p>
            </div>
          </div>

          <PieChart
            data={chartData}
            title="Payment Breakdown"
            formatValue={formatIndianCurrency}
          />
        </>
      )}
    </div>
  );
}
