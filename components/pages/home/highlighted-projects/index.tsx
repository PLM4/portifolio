import { HorizontalDivider } from "@/components/divider/horizontal";
import { SectionTitle } from "@/components/section-title";
import { ProjectCard } from "./project-card";

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="projetos" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};
