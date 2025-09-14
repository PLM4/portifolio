import { SectionTitle } from "@/components/section-title";
import { ExperienceItem } from "./experience-item";

export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-16">
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiencias"
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
