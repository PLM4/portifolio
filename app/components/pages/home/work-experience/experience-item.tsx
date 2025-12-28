"use client";

import Image from "next/image";
import { TechBadge } from "../../../tech-badge";
import { WorkExperience } from "@/app/types/work-experience";
import { RichText } from "@/app/components/rich-text";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { motion } from "framer-motion";
import { techBadgeAnimation } from "@/app/lib/animations";

type ExperienceItemProps = {
  experience: WorkExperience;
};

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const startDate = new Date(experience.startDate);

  const formattedStartDate = format(startDate, "MMM yyyy", { locale: ptBR });

  const formattedEndDate = experience.endDate
    ? format(new Date(experience.endDate), "MMM yyyy", { locale: ptBR })
    : "Present";

  const end = experience.endDate ? new Date(experience.endDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? "s" : ""}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? "es" : ""}`
            : ""
        }`
      : `${months} mes${months > 1 ? "es" : ""}`;

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] md:gap-10 gap-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={experience?.companyLogo.url}
            alt={`Logo da experiencia ${experience?.companyLogo.url}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div className="">
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience?.companyUrl}
            target="_blank"
            className="text-lg font-medium text-gray-50 hover:text-blue-500 transition-colors"
          >
            {experience?.companyName}
          </a>
          <h4 className="text-gray-300">{experience?.role}</h4>
          <span className="text-gray-500">
            {formattedStartDate} - {formattedEndDate} - {formattedDuration}
          </span>
          <div className="text-gray-400">
            {experience?.description && (
              <RichText content={experience.description.raw} />
            )}
          </div>
        </div>
        <p className="mt-6 text-gray-400 text-sm mb-3 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w[350px] mb-8">
          {experience?.technologies.map((tech, index) => (
            <TechBadge
              key={`experience-${experience.companyName}-tech-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
