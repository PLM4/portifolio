import { Link } from "@/app/components/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { SectionTitle } from "../../../section-title";

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center px-2 text-center">
      <SectionTitle
        title="Meus projetos"
        subtitle="projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-300 text-center max-w-[640px] my-6 text:sm sm:text-base">
          Aqui estão alguns dos meus projetos mais recentes, que demonstram
          minhas habilidades e experiência em desenvolvimento web. Cada projeto
          reflete meu compromisso com a qualidade, inovação e atenção aos
          detalhes.
        </p>
        <Link href="/" className="flex items-center gap-2">
          <HiArrowNarrowLeft size={18} />
          Voltar para a home
        </Link>
      </div>
    </section>
  );
};
