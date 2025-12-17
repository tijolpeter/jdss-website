'use client';

import { useState, useEffect } from 'react';
import { Info } from 'lucide-react';
import { calculateTDS, TDS_SECTIONS_FY2526, type TDSResult } from '@/lib/calculators/tds';
import { formatIndianCurrency } from '@/lib/calculators/emi';

export function TDSCalculator() {
  const [section, setSection] = useState<string>('194A');
  const [hasPAN, setHasPAN] = useState<boolean>(true);
  const [amount, setAmount] = useState<string>('100000');
  const [result, setResult] = useState<TDSResult | null>(null);

  useEffect(() => {
    const amt = parseFloat(amount) || 0;
    if (section && amt > 0) {
      const calculated = calculateTDS({
        section,
        hasPAN,
        amount: amt,
      });
      setResult(calculated);
    } else {
      setResult(null);
    }
  }, [section, hasPAN, amount]);

  const selectedSection = TDS_SECTIONS_FY2526.find((s) => s.section === section);

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="bg-white rounded-xl p-6 border border-border">
        <h3 className="font-semibold text-secondary-900 mb-6">TDS Details</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Section
            </label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
            >
              {TDS_SECTIONS_FY2526.map((s) => (
                <option key={s.section} value={s.section}>
                  Section {s.section} - {s.description}
                </option>
              ))}
            </select>
          </div>

          {selectedSection && (
            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-900">{selectedSection.description}</p>
                <p className="text-blue-700 mt-1">
                  Rate with PAN: <span className="font-medium">{selectedSection.rateWithPAN}%</span>
                  {' | '}
                  Without PAN: <span className="font-medium">{selectedSection.rateWithoutPAN}%</span>
                </p>
                {selectedSection.threshold && (
                  <p className="text-blue-700">
                    Threshold: {formatIndianCurrency(selectedSection.threshold)}
                  </p>
                )}
                {selectedSection.notes && (
                  <p className="text-blue-600 mt-1 text-xs">{selectedSection.notes}</p>
                )}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              PAN Quoted by Deductee
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pan"
                  checked={hasPAN}
                  onChange={() => setHasPAN(true)}
                  className="w-4 h-4 text-primary-600 border-border focus:ring-primary-500"
                />
                <span className="text-secondary-700">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pan"
                  checked={!hasPAN}
                  onChange={() => setHasPAN(false)}
                  className="w-4 h-4 text-primary-600 border-border focus:ring-primary-500"
                />
                <span className="text-secondary-700">No</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter amount"
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {result && result.tdsAmount > 0 && (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-primary-700">TDS Amount</p>
              <p className="text-sm font-medium text-primary-600">@ {result.rate}%</p>
            </div>
            <p className="text-4xl font-bold text-primary-900">
              {formatIndianCurrency(result.tdsAmount)}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-border">
              <p className="text-sm text-secondary-600 mb-1">Gross Amount</p>
              <p className="text-xl font-semibold text-secondary-900">
                {formatIndianCurrency(parseFloat(amount) || 0)}
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border">
              <p className="text-sm text-secondary-600 mb-1">Net Amount Payable</p>
              <p className="text-xl font-semibold text-accent-orange">
                {formatIndianCurrency(result.netAmount)}
              </p>
            </div>
          </div>
        </div>
      )}

      {result && result.tdsAmount === 0 && parseFloat(amount) > 0 && (
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <p className="text-green-800 font-medium">No TDS Applicable</p>
          <p className="text-green-700 text-sm mt-1">
            The TDS rate for this section is 0% or the amount is below the threshold.
          </p>
        </div>
      )}
    </div>
  );
}
