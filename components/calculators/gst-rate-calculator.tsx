'use client';

import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { determineGSTRate, DEFAULT_RATE_CHANGE_DATE, type GSTRateResult } from '@/lib/calculators/gst-rate';

function formatDateForInput(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function GSTRateCalculator() {
  const [invoiceDate, setInvoiceDate] = useState<string>(formatDateForInput(new Date()));
  const [supplyDate, setSupplyDate] = useState<string>(formatDateForInput(new Date()));
  const [paymentDate, setPaymentDate] = useState<string>(formatDateForInput(new Date()));
  const [rateChangeDate, setRateChangeDate] = useState<string>(formatDateForInput(DEFAULT_RATE_CHANGE_DATE));
  const [oldRate, setOldRate] = useState<string>('18');
  const [newRate, setNewRate] = useState<string>('12');
  const [result, setResult] = useState<GSTRateResult | null>(null);

  useEffect(() => {
    const old = parseFloat(oldRate) || 0;
    const newR = parseFloat(newRate) || 0;

    if (invoiceDate && supplyDate && paymentDate && rateChangeDate) {
      const calculated = determineGSTRate({
        invoiceDate: new Date(invoiceDate),
        supplyDate: new Date(supplyDate),
        paymentDate: new Date(paymentDate),
        rateChangeDate: new Date(rateChangeDate),
        oldRate: old,
        newRate: newR,
      });
      setResult(calculated);
    } else {
      setResult(null);
    }
  }, [invoiceDate, supplyDate, paymentDate, rateChangeDate, oldRate, newRate]);

  const isOldRateApplied = result?.applicableRate === parseFloat(oldRate);

  return (
    <div className="space-y-8">
      {/* Info Section */}
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">GST Rate Transition Rule</p>
            <p>
              If any two of the three events (Invoice, Supply, Payment) occur before the rate change date,
              the old rate applies. Otherwise, the new rate applies.
            </p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-xl p-6 border border-border">
        <h3 className="font-semibold text-secondary-900 mb-6">Transaction Details</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Invoice Date
            </label>
            <input
              type="date"
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Supply Date
            </label>
            <input
              type="date"
              value={supplyDate}
              onChange={(e) => setSupplyDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Payment Date
            </label>
            <input
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Rate Change Date
            </label>
            <input
              type="date"
              value={rateChangeDate}
              onChange={(e) => setRateChangeDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Old Rate (%)
            </label>
            <input
              type="number"
              value={oldRate}
              onChange={(e) => setOldRate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter old rate"
              min="0"
              max="100"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              New Rate (%)
            </label>
            <input
              type="number"
              value={newRate}
              onChange={(e) => setNewRate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter new rate"
              min="0"
              max="100"
              step="0.1"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          <div
            className={`rounded-xl p-6 border ${
              isOldRateApplied
                ? 'bg-amber-50 border-amber-200'
                : 'bg-green-50 border-green-200'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle
                className={`w-6 h-6 ${
                  isOldRateApplied ? 'text-amber-600' : 'text-green-600'
                }`}
              />
              <p
                className={`text-sm font-medium ${
                  isOldRateApplied ? 'text-amber-800' : 'text-green-800'
                }`}
              >
                Applicable GST Rate
              </p>
            </div>
            <p
              className={`text-4xl font-bold ${
                isOldRateApplied ? 'text-amber-900' : 'text-green-900'
              }`}
            >
              {result.applicableRate}%
            </p>
            <p
              className={`text-sm mt-2 ${
                isOldRateApplied ? 'text-amber-700' : 'text-green-700'
              }`}
            >
              {isOldRateApplied ? 'Old Rate Applied' : 'New Rate Applied'}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-border">
            <h4 className="font-medium text-secondary-900 mb-3">Explanation</h4>
            <p className="text-secondary-700 text-sm mb-2">{result.explanation}</p>
            <p className="text-secondary-600 text-sm">{result.rule}</p>
          </div>
        </div>
      )}
    </div>
  );
}
