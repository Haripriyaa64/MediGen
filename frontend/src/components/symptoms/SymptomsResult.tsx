import type { SymptomsResponse } from "@/types/symptoms";

import UrgencyBadge from "./UrgencyBadge";

import ConditionsCard from "./cards/ConditionsCard";
import HomeCareCard from "./cards/HomeCareCard";
import QuestionsCard from "./cards/QuestionsCard";
import RedFlagsCard from "./cards/RedFlagsCard";
import SummaryCard from "./cards/SummaryCard";

interface Props {
  result: SymptomsResponse;
}

export default function SymptomsResult({
  result,
}: Props) {

  const analysis = result.analysis;

  return (

    <div className="mt-10 space-y-8">

      <ConditionsCard
        conditions={analysis.possible_conditions}
      />

      <div className="rounded-3xl border bg-white p-6 shadow-sm">

        <h2 className="text-xl font-bold">
          🚦 Urgency Level
        </h2>

        <div className="mt-5">

          <UrgencyBadge
            urgency={analysis.urgency}
          />

        </div>

      </div>

      <QuestionsCard
        questions={analysis.questions}
      />

      <HomeCareCard
        items={analysis.home_care}
      />

      <RedFlagsCard
        items={analysis.red_flags}
      />

      <SummaryCard
        summary={analysis.summary}
      />

      <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-6">

        <h2 className="text-xl font-bold text-yellow-700">
          ⚠ Medical Disclaimer
        </h2>

        <p className="mt-4 leading-8 text-yellow-700">
          {analysis.disclaimer}
        </p>

      </div>

    </div>

  );

}