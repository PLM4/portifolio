import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-blue-600 text-white px-4 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
