interface Props {

  urgency: string;

}

export default function UrgencyBadge({

  urgency,

}: Props) {

  let color =
    "bg-green-100 text-green-700";

  if (
    urgency
      .toLowerCase()
      .includes("moderate")
  ) {

    color =
      "bg-yellow-100 text-yellow-700";

  }

  if (
    urgency
      .toLowerCase()
      .includes("high")
  ) {

    color =
      "bg-red-100 text-red-700";

  }

  return (

    <span
      className={`rounded-full px-4 py-2 font-semibold ${color}`}
    >

      {urgency}

    </span>

  );

}