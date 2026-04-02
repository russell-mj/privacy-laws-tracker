'use client';

import { PrivacyLaw } from '@/app/types/privacy-law';
import LawCard from './LawCard';
import { useState } from 'react';

interface PrivacyLawsTableProps {
  laws: PrivacyLaw[];
  filteredJurisdictions: string[];
}

export default function PrivacyLawsTable({ laws, filteredJurisdictions }: PrivacyLawsTableProps) {
  const [sortBy, setSortBy] = useState<'name' | 'year'>('year');

  const filteredLaws = laws.filter((law) => filteredJurisdictions.includes(law.jurisdiction));

  const sortedLaws = [...filteredLaws].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return b.enactedYear - a.enactedYear;
  });

  if (sortedLaws.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-600 dark:bg-zinc-900">
        <p className="text-zinc-600 dark:text-zinc-400">No laws match the selected filters</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Privacy Laws Overview</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('year')}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              sortBy === 'year'
                ? 'bg-blue-600 text-white dark:bg-blue-700'
                : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-50'
            }`}
          >
            Sort by Year
          </button>
          <button
            onClick={() => setSortBy('name')}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              sortBy === 'name'
                ? 'bg-blue-600 text-white dark:bg-blue-700'
                : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-50'
            }`}
          >
            Sort by Name
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedLaws.map((law) => (
          <LawCard key={law.id} law={law} />
        ))}
      </div>

      <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-900 dark:bg-blue-900 dark:text-blue-50">
        <p>
          <span className="font-semibold">Showing {sortedLaws.length}</span> of {laws.length} privacy laws
        </p>
      </div>
    </div>
  );
}
