import { TechBadge } from "@/app/components/tech-badge";
import { SectionTitle } from "../../../section-title";
import { Button } from "@/app/components/button";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { Link } from "@/app/components/Link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className=" absolute inset-0 z-[-1] "
        style={{
          background:
            "url(/images/hero-image.jpg) no-repeat center/cover, url(/images/selling-flowers.jpg) no-repeat center/cover",
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="Floresty"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <p className="text-gray-300 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        O objetivo do projeto é criar um sistema para gerenciar uma
        floricultura, permitindo o controle de estoque e vendas. O sistema foi
        desenvolvido utilizando a metodologia ágil Scrum, com sprints de duas
        semanas e reuniões diárias para acompanhar o progresso do projeto. A
        equipe foi composta por cinco membros, cada um com uma função
        específica, como desenvolvedor front-end, desenvolvedor back-end,
        designer e gerente de projeto. O projeto foi concluído com sucesso, com
        todas as funcionalidades implementadas e testadas. O sistema está em uso
        na floricultura local, e a equipe recebeu feedback positivo dos usuários
        finais.
      </p>

      <div className="w-full max-w-[330px] flex flex-wrap justify-center gap-2 items-center">
        <TechBadge name="NextJS" />
        <TechBadge name="TypeScript" />
        <TechBadge name="TailwindCSS" />
      </div>

      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com/PLM4" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="https://github.com/PLM4" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href={"/projects"}>
        <HiArrowNarrowLeft size={18} />
        Voltar para Projetos
      </Link>
    </section>
  );
};
