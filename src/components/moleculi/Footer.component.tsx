import { CenterLayout } from "../layouts/CenterLayout.component";

interface FooterProps {
  fixed?: boolean;
}

export const Footer: React.FC<FooterProps> = ({fixed}) => {
  return (
    <footer className=" fixed bottom-0 top-auto w-full h-12 bg-blue-950 flex justify-center items-center">
          <p className="text-white">Samuel Alegre © 2023</p>
    </footer>
  );
};
