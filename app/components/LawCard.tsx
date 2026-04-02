'use client';

import { PrivacyLaw } from '@/app/types/privacy-law';

interface LawCardProps {
  law: PrivacyLaw;
  compact?: boolean;
}

export default function LawCard({ law, compact = false }: LawCardProps) {
  if (compact) {
    return (
      <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{law.name}</h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{law.jurisdiction}</p>
          </div>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            {law.enactedYear}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{law.name}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{law.jurisdiction}</p>
        </div>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
          {law.enactedYear}
        </span>
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-300">{law.scope}</p>

      <div className="mb-4">
        <h4 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">Key Features</h4>
        <div className="flex flex-wrap gap-2">
          {law.keyFeatures.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900 dark:text-green-200"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
        <span className="font-medium">Applicability: </span>
        {law.applicability}
      </p>

      <a
        href={law.referenceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
      >
        View Official Source
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}
