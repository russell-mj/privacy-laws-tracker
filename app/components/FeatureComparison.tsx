'use client';

import { LawComparison } from '@/app/types/privacy-law';

interface FeatureComparisonProps {
  data: LawComparison[];
  filteredLawNames: string[];
}

export default function FeatureComparison({ data, filteredLawNames }: FeatureComparisonProps) {
  const features = data.map((item) => item.attribute);

  if (filteredLawNames.length === 0) {
    return (
      <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Feature Comparison</h2>
        <div className="rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-600 dark:bg-zinc-800">
          <p className="text-zinc-600 dark:text-zinc-400">Select jurisdictions to compare features</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
      <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">Feature Comparison</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-zinc-200 bg-zinc-100 px-4 py-3 text-left font-semibold text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50">
                Privacy Law
              </th>
              {features.map((feature) => (
                <th
                  key={feature}
                  className="border border-zinc-200 bg-zinc-100 px-4 py-3 text-center font-semibold text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50"
                >
                  <div className="text-sm">{feature}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredLawNames.map((lawName) => (
              <tr key={lawName} className="hover:bg-zinc-50 dark:hover:bg-zinc-800">
                <td className="border border-zinc-200 bg-zinc-50 px-4 py-3 font-medium text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-50">
                  {lawName}
                </td>
                {features.map((feature) => {
                  const item = data.find((d) => d.attribute === feature);
                  const hasFeature = item ? item[lawName as keyof typeof item] : false;

                  return (
                    <td
                      key={`${lawName}-${feature}`}
                      className="border border-zinc-200 px-4 py-3 text-center dark:border-zinc-700"
                    >
                      {hasFeature ? (
                        <div className="flex justify-center">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                            ✓
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-600">—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
        ✓ indicates the jurisdiction has implemented this feature.
      </p>
    </div>
  );
}
