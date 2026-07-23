import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex justify-start">

      <div className="flex gap-2 rounded-3xl border border-[#ECE9E3] bg-white px-5 py-4 shadow-sm">

        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: .6,
              repeat: Infinity,
              delay: dot * .15,
            }}
            className="h-2.5 w-2.5 rounded-full bg-indigo-500"
          />
        ))}

      </div>

    </div>
  );
}