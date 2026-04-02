'use client';

import { useState } from 'react';
import FilterBar from '@/app/components/FilterBar';
import PrivacyLawsTable from '@/app/components/PrivacyLawsTable';
import FeatureComparison from '@/app/components/FeatureComparison';
import { privacyLaws, featureComparison } from '@/app/utils/privacy-laws-data';

export default function Home() {
  const jurisdictions = Array.from(new Set(privacyLaws.map((law) => law.jurisdiction)));
  const [filteredJurisdictions, setFilteredJurisdictions] = useState<string[]>(jurisdictions);

  // Convert filtered jurisdictions to law names for feature comparison
  const filteredLawNames = privacyLaws
    .filter((law) => filteredJurisdictions.includes(law.jurisdiction))
    .map((law) => law.name);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">Privacy Laws Tracker</h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Compare and understand privacy regulations across jurisdictions
            </p>
          </div>

          <FilterBar
            jurisdictions={jurisdictions}
            onFilterChange={setFilteredJurisdictions}
          />

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PrivacyLawsTable
                laws={privacyLaws}
                filteredJurisdictions={filteredJurisdictions}
              />
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-zinc-900">
                <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-zinc-50">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Total Laws Tracked</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{privacyLaws.length}</p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Jurisdictions</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {filteredJurisdictions.length}
                    </p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Key Features Compared</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {featureComparison.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <FeatureComparison
              data={featureComparison}
              filteredLawNames={filteredLawNames}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
