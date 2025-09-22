import { Project } from "@/app/types/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((x) => x.name).join(", ");

  return (
    <div className="rounded-lg overflow-hidden h-[436px] flex flex-col bg-gray-800 border-2 border-gray-800 hover:border-blue-600 transition-all opacity-80 hover:opacity-100 group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail project ${project.title}`}
          width={380}
          height={200}
          unoptimized
          className="group-hover:scale-110 transition-all duration-500 w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-blue-400 transition-all">
          {project.title}
        </strong>
        <p className="mt-2 text-gray-300 line-clamp-4">
          {project.shortDescription}
        </p>
        <span className="text-sm text-gray-200 mt-auto font-medium block truncate">
          {technologies}
        </span>
      </div>
    </div>
  );
};
