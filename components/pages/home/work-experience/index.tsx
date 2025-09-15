import { SectionTitle } from "@/components/section-title";
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex md:gap-4 gap-10 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiências"
          subtitle="experiencia profissional"
        />
        <p className="mt-6 text-gray-400">
          Estou sempre em busca de novos desafios que me permitam crescer
          profissionalmente e contribuir para o sucesso da equipe.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};
