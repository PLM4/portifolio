type TechBadgeProps = {
  name: string;
};

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="text-blue-500 bg-blue-700/70 text-sm py-1 px-3 rounded-lg font-mono">
      {name}
    </span>
  );
};
