import Image from "next/image";

const sections = [
  {
    title: "Project Overview",
    // description:
    //   "A brief summary of the project's goals, scope, and key features.",
    imageUrl: "/images/selling-flowers.jpg",
  },
  //   {
  //     title: "Technologies Used",
  //     description:
  //       "An overview of the technologies, frameworks, and tools utilized in the project.",
  //     imageUrl: "/images/technologies-used.png",
  //   },
  //   {
  //     title: "Development Process",
  //     description:
  //       "A description of the development methodology, stages, and workflow followed during the project.",
  //     imageUrl: "/images/development-process.png",
  //   },
  //   {
  //     title: "Challenges and Solutions",
  //     description:
  //       "An outline of the major challenges faced during the project and how they were addressed.",
  //     imageUrl: "/images/challenges-solutions.png",
  //   },
  {
    title: "Results and Impact",
    // description:
    //   "A summary of the project's outcomes, achievements, and its impact on users or stakeholders.",
    imageUrl: "/images/caring-fish.jpg",
  },
];

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-gray-200">
            {section.title}
          </h2>
          <Image
            src={section.imageUrl}
            alt={`Imagem da sessão ${section.title}`}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover "
            unoptimized
          ></Image>
        </div>
      ))}
    </section>
  );
};
