import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

interface FooterProps {
  fixed?: boolean;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="text-white fixed bottom-0 top-auto w-full h-12 bg-blue-950 flex flex-col md:flex-row md:justify-between items-center px-8">
          <p className="hidden md:flex text-sm order-2 md:order-1">Samuel Alegre © 2023</p>
          <ul className="w-full mt-3 md:mt-0 md:w-auto flex items-center justify-around md:justify-center gap-4 order-1">
            <li className="text-2xl scale-100 md:scale-75 hover:scale-100 hover:cursor-pointer transition duration-75"><a href="https://twitter.com/SamuelAlegreC" target="_blank"><FaTwitter/></a></li>
            <li className="text-2xl scale-100 md:scale-75 hover:scale-100 hover:cursor-pointer transition duration-75"><a href="https://instagram.com/samuelalegrec" target="_blank"><FaInstagram/></a></li>
            <li className="text-2xl scale-100 md:scale-75 hover:scale-100 hover:cursor-pointer transition duration-75"><a href="https://github.com/samuelalecas" target="_blank"><FaGithub/></a></li>
          </ul>
    </footer>
  );
};
