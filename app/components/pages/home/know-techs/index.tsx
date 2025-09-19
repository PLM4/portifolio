import { SectionTitle } from "../../../section-title";
import { KnownTech } from "./known-tech";
import { TbBrandReact } from "react-icons/tb";

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Tecnologias que conheço" subtitle="tecnologias" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              name: "ReactJS",
              icon: <TbBrandReact />,
              startDate: "2020-01-01",
            }}
          />
        ))}
      </div>
    </section>
  );
};
