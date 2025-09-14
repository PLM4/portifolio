import Image from "next/image";

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40ppx,1fr] md:gap-10 gap-4">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/caring-fish.jpg"
            alt="Google Logo"
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
            href="https://www.google.com"
            target="_blank"
            className="text-lg font-medium text-gray-50 hover:text-blue-500 transition-colors"
            rel="noopener noreferrer"
          >
            Google
          </a>
          <h4 className="text-gray-400">Software Engineer</h4>
          <span className="text-gray-500">Jan 2020 - Present · 4 yrs</span>
        </div>
      </div>
    </div>
  );
};
