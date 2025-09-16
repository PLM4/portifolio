import { cn } from "@/app/lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) => {
  return (
    <div className={cn("flez flex-col gap-4", className)}>
      <span className="font-mono text-sm text-blue-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl sm:text-3xl lg:text-4xl font-medium">{title}</h3>
    </div>
  );
};
