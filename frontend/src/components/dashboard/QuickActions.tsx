import {
  FileHeart,
  FileText,
  Stethoscope,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function QuickActions() {
  return (
    <section className="mt-8 grid grid-cols-3 gap-6">

      <FeatureCard
        title="Symptoms Checker"
        description="Describe symptoms and receive AI-powered health insights."
        icon={<Stethoscope size={26} />}
      />

      <FeatureCard
        title="Prescription Summary"
        description="Convert prescriptions into easy-to-understand explanations."
        icon={<FileText size={26} />}
      />

      <FeatureCard
        title="Medical Reports"
        description="Generate structured reports for consultations and records."
        icon={<FileHeart size={26} />}
      />

    </section>
  );
}