"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

export const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="text-blue-500 bg-blue-700/70 text-sm py-1 px-3 rounded-lg font-mono"
      {...props}
    >
      {name}
    </motion.span>
  );
};
