import { Button } from "../../../button";
import { TechBadge } from "../../../tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandGmail, TbBrandLinkedin } from "react-icons/tb";

const MOCK_CONTACTS = [
  { label: "GitHub", href: "https://github.com/PLM4", icon: <TbBrandGithub /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pedro-lucas-de-melo-moraes-5223662bb/",
    icon: <TbBrandLinkedin />,
  },
  { label: "Gmail", href: "", icon: <TbBrandGmail /> },
];

export const HeroSection = () => {
  return (
    <section className="w-full min-h-screen lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex items-center pt-16 lg:pt-24">
      <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-0 px-4 sm:px-6">
        <div className="w-full lg:max-w-[570px] text-center lg:text-left">
          <p className="font-mono text-blue-300 text-sm lg:text-base">
            Olá, me chamo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-2">
            Pedro Lucas
          </h2>

          <p className="my-5 text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Olá, meu nome é Pedro Lucas, sou um desenvolvedor Full-Stack
            apaixonado em aprender novas tecnologias. Atualmente estou no último
            periodo de analise e desenvolvimento de sistemas no IFPB Campus
            Esperança. Estou sempre em busca de novos desafios e oportunidades
            para crescer profissionalmente.
          </p>

          <div className="flex justify-center lg:justify-start gap-2 flex-wrap">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge key={index} name="ReactJS" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 lg:justify-start sm:flex-row flex-col">
            <Button className="shadow-button text-sm lg:text-base">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-3xl text-white flex items-center gap-3 h-20">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.href}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-400 transition-colors"
                  rel="noopener noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex lg:ml-20 justify-center lg:justify-end w-full lg:w-auto">
          <Image
            width={420}
            height={404}
            src="/avatar.jpg"
            alt="Avatar"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};
