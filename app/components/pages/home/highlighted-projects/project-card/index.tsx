import { TechBadge } from "../../../../tech-badge";
import Image from "next/image";
import Link from "next/link";
import { FaRegLightbulb } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex-col flex lg:flex-row lg:gap-12 gap-6">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/selling-flowers.jpg"
          alt="Project Image"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div className="">
        <h3 className="text-lg flex items-center gap-3 text-gray-50 font-medium">
          <FaRegLightbulb className="w-5 h-5 " />
          Projeto de venda de flores
        </h3>
        <p className="my-6 text-gray-200 text-sm">
          Projeto desenvolvido em ReactJS, TailwindCSS e NodeJS. O projeto
          consiste em um site de venda de flores, onde o usuário pode navegar
          pelos produtos, adicionar ao carrinho e finalizar a compra.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="TailwindCSS" />
          <TechBadge name="NodeJS" />
          <TechBadge name="TypeScript" />
          <TechBadge name="JavaScript" />
          <TechBadge name="HTML" />
          <TechBadge name="CSS" />
        </div>

        <Link
          className="mt-4 lg:mt-4 flex sm:items-center sm:gap-5 sm:flex-row "
          href="/projects/selling-flowers"
        >
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
