'use client';

import { useState } from 'react';

interface FilterBarProps {
  jurisdictions: string[];
  onFilterChange: (selected: string[]) => void;
}

export default function FilterBar({ jurisdictions, onFilterChange }: FilterBarProps) {
  const [selected, setSelected] = useState<string[]>(jurisdictions);

  const handleToggle = (jurisdiction: string) => {
    const updated = selected.includes(jurisdiction)
      ? selected.filter((j) => j !== jurisdiction)
      : [...selected, jurisdiction];
    setSelected(updated);
    onFilterChange(updated);
  };

  const handleSelectAll = () => {
    setSelected(jurisdictions);
    onFilterChange(jurisdictions);
  };

  const handleClearAll = () => {
    setSelected([]);
    onFilterChange([]);
  };

  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">Filter by Jurisdiction</h3>
        <div className="flex gap-2">
          <button
            onClick={handleSelectAll}
            className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            Select All
          </button>
          <button
            onClick={handleClearAll}
            className="px-3 py-1 text-sm text-zinc-600 hover:text-zinc-700 dark:text-zinc-400"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {jurisdictions.map((jurisdiction) => (
          <label
            key={jurisdiction}
            className="flex cursor-pointer items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 transition-colors dark:bg-zinc-800"
          >
            <input
              type="checkbox"
              checked={selected.includes(jurisdiction)}
              onChange={() => handleToggle(jurisdiction)}
              className="h-4 w-4 cursor-pointer"
            />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{jurisdiction}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
