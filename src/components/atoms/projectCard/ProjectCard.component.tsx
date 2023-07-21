import { BiLogoJavascript, BiLogoReact } from "react-icons/bi";
import React from "react";

export interface ProjectProps {
  title: string;
  description: string;
  img: string;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  img,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <article className="flex flex-col items-center relative col-span-1 h-64 border-2 border-blue-950 rounded-md hover:scale-105 transition duration-200 opacity-90 hover:opacity-100 hover:shadow-xl">
        <div className="px-4 w-full flex flex-col align-center absolute bottom-2 p-2">
          <h1 className="text-left text-blue-950 font-medium text-xl mb-2">{title}</h1>
          <h2 className="text-left text-sm text-blue-950">{description}</h2>
        </div>
        <div className="absolute top-3 right-2 flex justify-end opacity-80">
          <BiLogoJavascript className="text-blue-950" fontSize="1.5rem" />
          <BiLogoReact className="text-blue-950" fontSize="1.5rem" />
        </div>
        <img
          src={img}
          alt="Icono del proyecto"
          className="mt-6 md:mt-10 w-40 md:w-28"
        />
        {/* <img src="src/assets/project-weather-01.png" alt="Imagen del proyecto Weather app" /> */}
      </article>
    </button>
  );
};
