interface Props {

  text: string;

}

export default function OCRPreview({

  text,

}: Props) {

  return (

    <div className="rounded-3xl border bg-neutral-50 p-6">

      <h2 className="text-xl font-bold">

        📄 OCR Extracted Text

      </h2>

      <pre className="mt-5 whitespace-pre-wrap text-sm leading-7">

{text}

      </pre>

    </div>

  );

}