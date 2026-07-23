import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-700",

    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",

    ghost:
      "bg-transparent hover:bg-neutral-100 text-neutral-700",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}