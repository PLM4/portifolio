"use client";

import { TechBadge } from "../../../../tech-badge";
import Image from "next/image";
import { FaRegLightbulb } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "@/app/components/link";
import { Project } from "@/app/types/projects";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex-col flex lg:flex-row lg:gap-12 gap-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={`Project thumbnail ${project.title}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="text-lg flex items-center gap-3 text-gray-50 font-medium"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <FaRegLightbulb className="w-5 h-5 " />
          {project.title}
        </motion.h3>
        <motion.p
          className="my-6 text-gray-200 "
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies.map((tech, i) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  );
};
