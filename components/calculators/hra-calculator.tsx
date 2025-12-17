'use client';

import { useState, useEffect } from 'react';
import {
  calculateHRAMonth,
  calculateHRASummary,
  createEmptyMonths,
  MONTHS,
  type HRAMonth,
  type HRAMonthResult,
  type HRASummary,
} from '@/lib/calculators/hra';
import { formatIndianCurrency } from '@/lib/calculators/emi';
import { CalculatorChart } from './calculator-chart';

export function HRACalculator() {
  const [months, setMonths] = useState<HRAMonth[]>(createEmptyMonths());
  const [isMetroCity, setIsMetroCity] = useState<boolean>(false);
  const [results, setResults] = useState<HRAMonthResult[]>([]);
  const [summary, setSummary] = useState<HRASummary | null>(null);

  // Quick fill option
  const [quickFillSalary, setQuickFillSalary] = useState<string>('');
  const [quickFillHRA, setQuickFillHRA] = useState<string>('');
  const [quickFillRent, setQuickFillRent] = useState<string>('');

  useEffect(() => {
    const calculatedResults = months.map((month) =>
      calculateHRAMonth(month, isMetroCity)
    );
    setResults(calculatedResults);
    setSummary(calculateHRASummary(calculatedResults));
  }, [months, isMetroCity]);

  const updateMonth = (index: number, field: keyof HRAMonth, value: number) => {
    const newMonths = [...months];
    newMonths[index] = { ...newMonths[index], [field]: value };
    setMonths(newMonths);
  };

  const applyQuickFill = () => {
    const salary = parseFloat(quickFillSalary) || 0;
    const hra = parseFloat(quickFillHRA) || 0;
    const rent = parseFloat(quickFillRent) || 0;

    const newMonths = MONTHS.map((month) => ({
      month,
      basicSalary: salary,
      hraReceived: hra,
      rentPaid: rent,
    }));
    setMonths(newMonths);
  };

  const resetAll = () => {
    setMonths(createEmptyMonths());
    setQuickFillSalary('');
    setQuickFillHRA('');
    setQuickFillRent('');
  };

  const chartData = summary
    ? [
        { label: 'HRA Exempted', value: summary.totalExempted, color: '#0d9488' },
        { label: 'HRA Taxable', value: summary.totalTaxable, color: '#f97316' },
      ]
    : [];

  return (
    <div className="space-y-8">
      {/* Metro City Toggle */}
      <div className="bg-white rounded-xl p-6 border border-border">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isMetroCity}
            onChange={(e) => setIsMetroCity(e.target.checked)}
            className="w-5 h-5 rounded border-border text-primary-600 focus:ring-primary-500"
          />
          <div>
            <span className="font-medium text-secondary-900">Metro City</span>
            <p className="text-sm text-secondary-600">
              Check if you reside in Delhi, Mumbai, Kolkata, or Chennai
              (50% exemption instead of 40%)
            </p>
          </div>
        </label>
      </div>

      {/* Quick Fill */}
      <div className="bg-secondary-50 rounded-xl p-6 border border-border">
        <h3 className="font-medium text-secondary-900 mb-4">Quick Fill (Same for all months)</h3>
        <div className="grid sm:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-medium text-secondary-600 mb-1">
              Basic Salary
            </label>
            <input
              type="number"
              value={quickFillSalary}
              onChange={(e) => setQuickFillSalary(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="₹0"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-secondary-600 mb-1">
              HRA Received
            </label>
            <input
              type="number"
              value={quickFillHRA}
              onChange={(e) => setQuickFillHRA(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="₹0"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-secondary-600 mb-1">
              Rent Paid
            </label>
            <input
              type="number"
              value={quickFillRent}
              onChange={(e) => setQuickFillRent(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
              placeholder="₹0"
            />
          </div>
          <div className="flex items-end gap-2">
            <button
              onClick={applyQuickFill}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Apply
            </button>
            <button
              onClick={resetAll}
              className="px-4 py-2 text-sm font-medium text-secondary-600 bg-white border border-border rounded-lg hover:bg-secondary-50 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Monthly Table */}
      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Month
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Basic Salary
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  HRA Received
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Rent Paid
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Exempted
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Taxable
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {months.map((month, index) => {
                const result = results[index];
                return (
                  <tr key={month.month}>
                    <td className="px-4 py-3 font-medium text-secondary-900">
                      {month.month}
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={month.basicSalary || ''}
                        onChange={(e) =>
                          updateMonth(index, 'basicSalary', parseFloat(e.target.value) || 0)
                        }
                        className="w-full px-2 py-1.5 text-sm rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={month.hraReceived || ''}
                        onChange={(e) =>
                          updateMonth(index, 'hraReceived', parseFloat(e.target.value) || 0)
                        }
                        className="w-full px-2 py-1.5 text-sm rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={month.rentPaid || ''}
                        onChange={(e) =>
                          updateMonth(index, 'rentPaid', parseFloat(e.target.value) || 0)
                        }
                        className="w-full px-2 py-1.5 text-sm rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="0"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">
                      {result ? formatIndianCurrency(result.hraExempted) : '₹0'}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-amber-600">
                      {result ? formatIndianCurrency(result.hraTaxable) : '₹0'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      {summary && (summary.totalHRAReceived > 0 || summary.totalSalary > 0) && (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl p-5 border border-border">
              <p className="text-sm text-secondary-600 mb-1">Total Salary</p>
              <p className="text-lg font-semibold text-secondary-900">
                {formatIndianCurrency(summary.totalSalary)}
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border">
              <p className="text-sm text-secondary-600 mb-1">Total HRA Received</p>
              <p className="text-lg font-semibold text-secondary-900">
                {formatIndianCurrency(summary.totalHRAReceived)}
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-border">
              <p className="text-sm text-secondary-600 mb-1">Total Rent Paid</p>
              <p className="text-lg font-semibold text-secondary-900">
                {formatIndianCurrency(summary.totalRentPaid)}
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <p className="text-sm text-green-700 mb-1">Total Exempted</p>
              <p className="text-lg font-bold text-green-800">
                {formatIndianCurrency(summary.totalExempted)}
              </p>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <p className="text-sm text-amber-700 mb-1">Total Taxable</p>
              <p className="text-lg font-bold text-amber-800">
                {formatIndianCurrency(summary.totalTaxable)}
              </p>
            </div>
          </div>

          <CalculatorChart
            data={chartData}
            title="HRA Breakdown"
            formatValue={formatIndianCurrency}
          />
        </>
      )}
    </div>
  );
}
