import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  large?: boolean;
  onClick?: () => void;
}

export default function Card({
  title,
  description,
  icon,
  className,
  large = false,
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer overflow-hidden rounded-[30px] border border-[#ECE9E3] bg-white p-8 transition-all duration-300 hover:border-violet-200 hover:shadow-xl",
        large && "min-h-[260px]",
        className
      )}
    >
      <div className="flex h-full flex-col justify-between">

        <div>

          <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">

            {icon}

          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">

            {title}

          </h3>

          <p className="mt-4 leading-7 text-neutral-500">

            {description}

          </p>

        </div>

        <div className="mt-10">

          <span className="text-sm font-medium text-violet-600 transition-all group-hover:translate-x-1 inline-flex items-center gap-2">

            Open Workspace →

          </span>

        </div>

      </div>
    </motion.div>
  );
}