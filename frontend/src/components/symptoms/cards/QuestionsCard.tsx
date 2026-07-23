


interface Props {
  questions: string[];
}

export default function QuestionsCard({
  questions,
}: Props) {

  return (

    <div className="rounded-3xl border bg-blue-50 p-6">

      <h2 className="text-xl font-bold">
        ❓ AI Follow-up Questions
      </h2>

      <ul className="mt-5 space-y-3">

        {questions.map((item) => (

          <li key={item}>
            • {item}
          </li>

        ))}

      </ul>

    </div>

  );

}