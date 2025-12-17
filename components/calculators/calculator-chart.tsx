'use client';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

interface CalculatorChartProps {
  data: ChartData[];
  title?: string;
  formatValue?: (value: number) => string;
}

export function CalculatorChart({ data, title, formatValue }: CalculatorChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const defaultFormat = (v: number) => v.toLocaleString('en-IN');

  return (
    <div className="bg-white rounded-xl p-6 border border-border">
      {title && (
        <h3 className="font-semibold text-secondary-900 mb-4">{title}</h3>
      )}
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-secondary-600">{item.label}</span>
              <span className="font-medium text-secondary-900">
                {formatValue ? formatValue(item.value) : defaultFormat(item.value)}
              </span>
            </div>
            <div className="h-4 bg-secondary-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface PieChartProps {
  data: ChartData[];
  title?: string;
  formatValue?: (value: number) => string;
}

export function PieChart({ data, title, formatValue }: PieChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const defaultFormat = (v: number) => v.toLocaleString('en-IN');

  // Calculate cumulative percentages for the pie chart
  let cumulative = 0;
  const segments = data.map((item) => {
    const percentage = total > 0 ? (item.value / total) * 100 : 0;
    const start = cumulative;
    cumulative += percentage;
    return { ...item, percentage, start, end: cumulative };
  });

  // Create conic-gradient string
  const gradient = segments
    .map((seg) => `${seg.color} ${seg.start}% ${seg.end}%`)
    .join(', ');

  return (
    <div className="bg-white rounded-xl p-6 border border-border">
      {title && (
        <h3 className="font-semibold text-secondary-900 mb-4">{title}</h3>
      )}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div
          className="w-32 h-32 rounded-full flex-shrink-0"
          style={{
            background: total > 0 ? `conic-gradient(${gradient})` : '#e5e7eb',
          }}
        />
        <div className="flex-1 space-y-2">
          {data.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-secondary-600 flex-1">
                {item.label}
              </span>
              <span className="text-sm font-medium text-secondary-900">
                {formatValue ? formatValue(item.value) : defaultFormat(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
