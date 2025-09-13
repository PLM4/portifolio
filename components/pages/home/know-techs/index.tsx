import { SectionTitle } from "@/components/section-title";
import { KnownTech } from "./known-tech";
import { TbBrandReact } from "react-icons/tb";

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Tecnologias que conheço" subtitle="tecnologias" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-6 mt-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              name: "ReactJS",
              icon: <TbBrandReact />,
            }}
          />
        ))}
      </div>
    </section>
  );
};
