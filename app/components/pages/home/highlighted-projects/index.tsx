import { HorizontalDivider } from "../../../divider/horizontal";
import { SectionTitle } from "../../../section-title";
import { ProjectCard } from "./project-card";
import Link from "next/link";

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="projetos" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400"> Se interessou?</span>
          <Link className="inline-flex" href="/projects">
            Veja todos!
          </Link>
        </p>
      </div>
    </section>
  );
};
