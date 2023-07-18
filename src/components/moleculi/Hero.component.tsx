import { Button } from "../atoms/button/Button.component";
import { CenterLayout } from "../layouts/CenterLayout.component";

export const Hero = () => {
  return (
    <section>
      <CenterLayout width="900">
        <div className="w-full py-4 md:px-16 md:py-12 flex flex-col">
          <div className="w-full p-4 flex flex-col md:flex-row justify-center items-center">
            <div className="w-full text-center flex flex-col justify-center items-center md:items-start md:text-left md:w-1/2 p-4 order-1">
              <h1 className="text-4xl mb-4 text-blue-950">
                Frontent Developer
              </h1>
              <h2 className="text-md mb-0 md:mb-8 w-3/4">
                Este es una web a modo de portafolio, quiero ver cómo queda para
                subirla al GitHub.
              </h2>
              <div className="hidden md:block">
                <Button name="¡Llámame!" />
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img
                className="h-72"
                src="src/assets/avatar-full-body.png"
                alt="Ilustración de Samuel Alegre de cuerpo entero"
              />
            </div>
          </div>
          <div className="block md:hidden">
            <Button name="¡Llámame!" width="full" />
          </div>
        </div>
      </CenterLayout>
    </section>
  );
};
