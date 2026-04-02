export interface PrivacyLaw {
  id: string;
  name: string;
  jurisdiction: string;
  enactedYear: number;
  scope: string;
  keyFeatures: string[];
  applicability: string;
  referenceUrl: string;
}

export interface LawComparison {
  attribute: string;
  [key: string]: boolean | string;
}
