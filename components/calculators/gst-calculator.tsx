'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  calculateGSTRow,
  calculateGSTSummary,
  createEmptyGSTRow,
  GST_RATES,
  type GSTRow,
  type GSTRowResult,
  type GSTSummary,
} from '@/lib/calculators/gst';
import { formatIndianCurrency } from '@/lib/calculators/emi';

export function GSTCalculator() {
  const [rows, setRows] = useState<GSTRow[]>([createEmptyGSTRow()]);
  const [results, setResults] = useState<Map<string, GSTRowResult>>(new Map());
  const [summary, setSummary] = useState<GSTSummary | null>(null);

  useEffect(() => {
    const newResults = new Map<string, GSTRowResult>();
    rows.forEach((row) => {
      newResults.set(row.id, calculateGSTRow(row));
    });
    setResults(newResults);
    setSummary(calculateGSTSummary(rows));
  }, [rows]);

  const addRow = () => {
    setRows([...rows, createEmptyGSTRow()]);
  };

  const removeRow = (id: string) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const updateRow = (id: string, field: keyof GSTRow, value: string | number) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const resetAll = () => {
    setRows([createEmptyGSTRow()]);
  };

  return (
    <div className="space-y-6">
      {/* Input Table */}
      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Type of Sale
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Rate
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Taxable Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Total Tax
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  IGST
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  CGST
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  SGST
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Cess %
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-secondary-700 uppercase">
                  Cess
                </th>
                <th className="px-4 py-3 w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => {
                const result = results.get(row.id);
                return (
                  <tr key={row.id}>
                    <td className="px-4 py-3">
                      <select
                        value={row.saleType}
                        onChange={(e) =>
                          updateRow(row.id, 'saleType', e.target.value)
                        }
                        className="w-full px-2 py-1.5 text-sm rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        <option value="inter-state">Inter State</option>
                        <option value="intra-state">Intra State</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={row.taxRate}
                        onChange={(e) =>
                          updateRow(row.id, 'taxRate', parseFloat(e.target.value))
                        }
                        className="w-full px-2 py-1.5 text-sm rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
                      >
                        {GST_RATES.map((rate) => (
                          <option key={rate} value={rate}>
                            {rate}%
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={row.taxableAmount || ''}
                        onChange={(e) =>
                          updateRow(row.id, 'taxableAmount', parseFloat(e.target.value) || 0)
                        }
                        className="w-full px-2 py-1.5 text-sm rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="0"
                        min="0"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-secondary-900">
                      {result ? formatIndianCurrency(result.totalTax) : '₹0'}
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary-700">
                      {result ? formatIndianCurrency(result.igst) : '₹0'}
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary-700">
                      {result ? formatIndianCurrency(result.cgst) : '₹0'}
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary-700">
                      {result ? formatIndianCurrency(result.sgst) : '₹0'}
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={row.cessRate || ''}
                        onChange={(e) =>
                          updateRow(row.id, 'cessRate', parseFloat(e.target.value) || 0)
                        }
                        className="w-20 px-2 py-1.5 text-sm rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="0"
                        min="0"
                        step="0.1"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary-700">
                      {result ? formatIndianCurrency(result.cess) : '₹0'}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => removeRow(row.id)}
                        disabled={rows.length === 1}
                        className="p-1.5 text-secondary-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="px-4 py-3 border-t border-border flex gap-3">
          <button
            onClick={addRow}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Row
          </button>
          <button
            onClick={resetAll}
            className="px-4 py-2 text-sm font-medium text-secondary-600 bg-secondary-100 rounded-lg hover:bg-secondary-200 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="bg-white rounded-xl p-6 border border-border">
          <h3 className="font-semibold text-secondary-900 mb-4">Summary</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-secondary-50 rounded-lg">
              <p className="text-sm text-secondary-600 mb-1">Total Taxable Amount</p>
              <p className="text-xl font-semibold text-secondary-900">
                {formatIndianCurrency(summary.totalTaxable)}
              </p>
            </div>
            <div className="p-4 bg-secondary-50 rounded-lg">
              <p className="text-sm text-secondary-600 mb-1">Total IGST</p>
              <p className="text-xl font-semibold text-secondary-900">
                {formatIndianCurrency(summary.totalIGST)}
              </p>
            </div>
            <div className="p-4 bg-secondary-50 rounded-lg">
              <p className="text-sm text-secondary-600 mb-1">Total CGST</p>
              <p className="text-xl font-semibold text-secondary-900">
                {formatIndianCurrency(summary.totalCGST)}
              </p>
            </div>
            <div className="p-4 bg-secondary-50 rounded-lg">
              <p className="text-sm text-secondary-600 mb-1">Total SGST</p>
              <p className="text-xl font-semibold text-secondary-900">
                {formatIndianCurrency(summary.totalSGST)}
              </p>
            </div>
            <div className="p-4 bg-secondary-50 rounded-lg">
              <p className="text-sm text-secondary-600 mb-1">Total Cess</p>
              <p className="text-xl font-semibold text-secondary-900">
                {formatIndianCurrency(summary.totalCess)}
              </p>
            </div>
            <div className="p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-sm text-primary-700 mb-1">Grand Total Tax</p>
              <p className="text-xl font-bold text-primary-900">
                {formatIndianCurrency(summary.grandTotalTax)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
