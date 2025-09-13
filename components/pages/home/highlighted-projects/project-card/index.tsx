import Image from "next/image";
import { FaRegLightbulb } from "react-icons/fa";

export const ProjectCard = () => {
  return (
    <div className="flex-col flex lg:flex-row lg:gap-12 gap-6">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/selling-flowers.jpg"
          alt="Project Image"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="">
        <h3 className="text-lg flex items-center gap-3 text-gray-50 font-medium">
          <FaRegLightbulb className="w-5 h-5 " />
          Projeto de venda de flores
        </h3>
        <p className="my-6 text-gray-200 text-sm">
          Projeto desenvolvido em ReactJS, TailwindCSS e NodeJS. O projeto
          consiste em um site de venda de flores, onde o usuário pode navegar
          pelos produtos, adicionar ao carrinho e finalizar a compra.
        </p>
      </div>
    </div>
  );
};
