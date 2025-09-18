"use client";

import { useForm } from "react-hook-form";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type contactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const { handleSubmit, register } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: contactFormData) => {
    console.log(data);
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto ">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="text-center items-center"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-16 bg-gray-800/80 rounded-lg placeholder:text-gray-400 text-gray-50 p-5 
                         focus:outline-none border border-gray-700 focus:border-blue-500 
                         transition-all duration-300 group-hover:border-gray-500"
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-16 bg-gray-800/80 rounded-lg placeholder:text-gray-400 text-gray-50 p-5 
                         focus:outline-none border border-gray-700 focus:border-blue-500 
                         transition-all duration-300 group-hover:border-gray-500"
            {...register("email")}
          />
          <input
            placeholder="Mensagem"
            className="resize-none h-[138px] w-full bg-gray-800/80 rounded-lg placeholder:text-transparent text-gray-50 pt-7 px-5 pb-5 focus:outline-none border border-gray-700 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-500"
            {...register("message")}
            maxLength={500}
          />

          <Button className="h-max mx-auto mt-6 shadow-button">
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
};
