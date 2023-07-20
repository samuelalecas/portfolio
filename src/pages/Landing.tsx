import { Contact } from "../components/moleculi/Contact.component";
import { Footer } from "../components/moleculi/Footer.component";
import { Header } from "../components/moleculi/Header.component";
import { Hero } from "../components/moleculi/Hero.component";
import { Projects } from "../components/moleculi/Projects.component";

const Landing = () => {
  return (
    <div className="max-w-screen max-h-screen">
      <Header />
      <div className="mb-24 pb-24">
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
