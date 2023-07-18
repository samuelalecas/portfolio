import { ProjectCard } from "../atoms/ProjectCard.component";
import { CenterLayout } from "../layouts/CenterLayout.component";
export const Projects = () => {
  return (
    <section className="w-full border-t-2 border-violet-200">
      <CenterLayout width="900">
        <div className="w-full p-4 py-8 flex flex-col">
          <h1 className="text-4xl mb-6 text-blue-950">Projects</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <ProjectCard title="Weather Page" img={"src/assets/weather-app-icon.svg"}description="Comprueba qué tiempo hará hoy y mañana."/>
            <ProjectCard title="Calculator" description="¿Cuánto serán dos más dos menos uno?"/>
            <ProjectCard title="To-Do List" description="No se te escapará ni una sola tarea."/>
            <ProjectCard title="Tic-Tac-Toe" description="Demuestra quién manda aquí."/>
          </div>

        </div>
      </CenterLayout>
    </section>
  );
};
