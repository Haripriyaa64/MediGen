import type {
  MedicineResponse,
} from "@/types/medicine";

import MedicineHeader from "./cards/MedicineHeader";
import UsesCard from "./cards/UsesCard";
import DosageCard from "./cards/DosageCard";
import SideEffectsCard from "./cards/SideEffectsCard";
import WarningsCard from "./cards/WarningsCard";
import AlternativesCard from "./cards/AlternativesCard";
import StorageCard from "./cards/StorageCard";
import SummaryCard from "./cards/SummaryCard";
import DisclaimerCard from "./cards/DisclaimerCard";

interface Props {
  result: MedicineResponse;
}

export default function MedicineResult({
  result,
}: Props) {

  if (!result.success) {

    return (

      <div className="mt-10 rounded-3xl border border-red-200 bg-red-50 p-8">

        <h2 className="text-2xl font-bold text-red-600">
          Analysis Failed
        </h2>

        <p className="mt-4">
          {result.error}
        </p>

      </div>

    );

  }

  const analysis = result.analysis;

  return (

    <div className="mt-10 space-y-8">

      <MedicineHeader
        analysis={analysis}
      />

      <UsesCard
        uses={analysis.uses}
      />

      <DosageCard
        dosage={analysis.dosage}
        how={analysis.how_to_take}
      />

      <SideEffectsCard
        items={analysis.side_effects}
      />

      <WarningsCard
        items={analysis.warnings}
      />

      <StorageCard
        storage={analysis.storage}
      />

      <AlternativesCard
        items={analysis.alternatives}
      />

      <SummaryCard
        summary={analysis.summary}
      />

      <DisclaimerCard
        disclaimer={analysis.disclaimer}
      />

    </div>

  );

}