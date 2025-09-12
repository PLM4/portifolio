type KnownTechProps = {
  tech: {
    name: string;
    icon: React.ReactNode;
    startDate: string;
  };
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-blue-400 transition-all hover:bg-gray-600/30">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
    </div>
  );
};
