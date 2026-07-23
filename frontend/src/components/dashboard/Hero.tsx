import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .35,
      }}
    >

      <p className="text-zinc-500 text-lg">
        Good afternoon 👋
      </p>

      <h1 className="mt-3 text-6xl font-semibold tracking-tight leading-[1.05] text-zinc-900">

        How can I help
        <br />
        you today?

      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">

        Ask questions about symptoms,
        medicines,
        prescriptions,
        and medical reports using one intelligent AI workspace.

      </p>

      <motion.div
        whileHover={{
          y: -4,
        }}
        className="mt-14 rounded-[34px] border border-[#ECE9E3] bg-white p-10 shadow-sm"
      >

        <div className="flex items-center justify-between">

          <div>

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-indigo-50">

              <Sparkles
                className="text-indigo-600"
                size={30}
              />

            </div>

            <h2 className="text-3xl font-semibold tracking-tight">

              AI Medical Assistant

            </h2>

            <p className="mt-4 max-w-xl leading-8 text-zinc-500">

              Start a natural conversation with AI.

              Upload prescriptions.

              Analyze symptoms.

              Generate medical reports.

            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
                Symptoms
              </span>

              <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
                Prescriptions
              </span>

              <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm">
                Reports
              </span>

            </div>

            <button
              onClick={() => navigate("/chat")}
              className="mt-8 flex items-center gap-3 rounded-2xl bg-indigo-600 px-7 py-4 font-medium text-white transition hover:bg-indigo-700"
            >

              Start Conversation

              <ArrowRight size={18} />

            </button>

          </div>

          <Sparkles
            size={130}
            className="text-indigo-100"
          />

        </div>

      </motion.div>

    </motion.section>
  );
}