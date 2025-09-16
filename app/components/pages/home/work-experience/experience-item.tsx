import Image from "next/image";
import { TechBadge } from "../../../tech-badge";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] md:gap-10 gap-4">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/caring-fish.jpg"
            alt="Google Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div className="">
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.google.com"
            target="_blank"
            className="text-lg font-medium text-gray-50 hover:text-blue-500 transition-colors"
          >
            Google
          </a>
          <h4 className="text-gray-300">Software Engineer</h4>
          <span className="text-gray-500">Jan 2023 - O momento · 2 anos</span>
          <p className="text-gray-400">
            Trabalhei em projetos desafiadores, contribuindo para o
            desenvolvimento de soluções inovadoras e aprimorando minhas
            habilidades técnicas.
          </p>
        </div>
        <p className="mt-6 text-gray-400 text-sm mb-3 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w[350px] mb-8">
          <TechBadge name="React" />
          <TechBadge name="TypeScript" />
          <TechBadge name="Node.js" />
          <TechBadge name="React" />
          <TechBadge name="TypeScript" />
          <TechBadge name="Node.js" />
        </div>
      </div>
    </div>
  );
};
