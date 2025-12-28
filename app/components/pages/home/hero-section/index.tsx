"use client";

import { Button } from "../../../button";
import { TechBadge } from "../../../tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HomePageInfo } from "../../../../types/page-info";
import { RichText } from "@/app/components/rich-text";
import { CMSIcon } from "@/app/components/cms-icon";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animations";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};
export const HeroSection = ({ homeInfo }: HomeSectionProps) => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-screen lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex items-center pt-16 lg:pt-24">
      <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-0 px-4 sm:px-6">
        <motion.div
          className="w-full lg:max-w-[570px] text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-blue-300 text-sm lg:text-base">
            Olá, me chamo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-2">
            Pedro Lucas
          </h2>

          <div className="my-5 text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex justify-center lg:justify-start gap-2 flex-wrap">
            {homeInfo.technologies.map((tech, index) => (
              <TechBadge
                key={`intro-tech${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 lg:justify-start sm:flex-row flex-col">
            <Button
              className="shadow-button text-sm lg:text-base"
              onClick={handleContactClick}
            >
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-3xl text-white flex items-center gap-3 h-20">
              {homeInfo.socials.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-400 transition-colors"
                >
                  <CMSIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex lg:ml-20 justify-center lg:justify-end w-full lg:w-auto"
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Avatar"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover"
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  );
};
