import { CenterLayout } from "../layouts/CenterLayout.component";

export const Footer = () => {
  return (
    <section>
      <CenterLayout width="900" bgColor="bg-blue-950">
        <div className="w-full p-4 py-12 flex justify-center items-center h-10">  
          <p className="text-white">Samuel Alegre © 2023</p>
        </div>
      </CenterLayout>
    </section>
  );
};
