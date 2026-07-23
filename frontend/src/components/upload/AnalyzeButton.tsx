import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface AnalyzeButtonProps {
  disabled: boolean;
  loading?: boolean;
  onClick: () => void;
}

export default function AnalyzeButton({
  disabled,
  loading = false,
  onClick,
}: AnalyzeButtonProps) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
w-full
mt-8
h-16
rounded-[22px]
font-semibold
text-lg
transition-all
duration-300
flex
items-center
justify-center
gap-3

${
  disabled
    ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
    : "bg-neutral-900 text-white hover:bg-black shadow-lg"
}
`}
    >
      {loading ? (
        <>
          <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Sparkles size={20} />
          Analyze with MediGen AI
        </>
      )}
    </motion.button>
  );
}