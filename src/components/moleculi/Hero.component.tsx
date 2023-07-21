import { Button } from "../atoms/button/Button.component";
import { CenterLayout } from "../layouts/CenterLayout.component";
import fullBodyAvatarImg from "../../assets/avatar-full-body.png";
import { HashLink as Link} from "react-router-hash-link";

export const Hero = () => {
  return (
    <section>
      <CenterLayout width="900">
        <div className="w-full py-4 md:px-16 md:py-12 flex flex-col mt-20">
          <div className="w-full p-4 flex flex-col md:flex-row justify-center items-center">
            <div className="w-full text-center flex flex-col justify-center items-center md:items-start md:text-left md:w-1/2 p-4 order-1">
              <h1 className="font-display text-[2.5rem] mb-4 text-blue-950">
                Frontent Developer
              </h1>
              <h2 className="text-sm mb-0 md:mb-8 w-full text-blue-950">
                Desarrollador Frontend Junior y Diseñador gráfico Senior con experiencia en diseño de aplicaciones, animación y modelado 3D.
              </h2>
              <div className="hidden md:block">
                <Link to="#contact" smooth><Button name="¡Escríbeme!" /></Link>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img
                className="h-72"
                src={fullBodyAvatarImg}
                alt="Ilustración de Samuel Alegre de cuerpo entero"
              />
            </div>
          </div>
          <div className="block md:hidden">
          <Link to="#contact" smooth><Button name="¡Escríbeme!" width="full"/></Link>
          </div>
        </div>
      </CenterLayout>
    </section>
  );
};
