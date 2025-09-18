import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className="rounded-lg overflow-hidden h-[436px] flex flex-col bg-gray-800 border-2 border-gray-800 hover:border-blue-600 transition-all opacity-80 hover:opacity-100 group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src="/images/selling-flowers.jpg"
          alt="Thumbbnail project floristry"
          width={380}
          height={200}
          unoptimized
          className="group-hover:scale-110 transition-all duration-500 w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-blue-400 transition-all">
          Floristry
        </strong>
        <p className="mt-2 text-gray-300 line-clamp-4">
          Projeto desenvolvido para um cliente que trabalha com flores. O mesmo
          precisava de um sistema para gerenciar seus pedidos e clientes. O
          sistema foi desenvolvido utilizando ReactJS no front-end e NodeJS no
          back-end.
        </p>
        <span className="text-sm text-gray-200 mt-auto font-medium block truncate">
          ReactJS, NodeJS, TypeScript, PostgreSQL, Docker, AWS, TailwindCSS
        </span>
      </div>
    </div>
  );
};
