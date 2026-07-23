import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group cursor-pointer rounded-[28px] border border-[#ECE9E3] bg-white p-8 shadow-sm hover:shadow-xl"
    >
      <div className="flex justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">

          {icon}

        </div>

        <ArrowUpRight
          size={18}
          className="opacity-0 transition group-hover:opacity-100"
        />

      </div>

      <h3 className="mt-8 text-xl font-semibold tracking-tight">

        {title}

      </h3>

      <p className="mt-3 leading-7 text-zinc-500">

        {description}

      </p>

    </motion.div>
  );
}