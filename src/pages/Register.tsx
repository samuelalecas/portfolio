import { CenterLayout } from "../components/layouts/CenterLayout.component";
import { Footer } from "../components/moleculi/Footer.component";
import { Header } from "../components/moleculi/Header.component";
import { RegisterForm } from "../components/moleculi/RegisterForm.component";

const Register = () => {
  return (
    <div className="max-w-screen max-h-screen">
      <Header />
      <CenterLayout width="900">
        <div className="w-full p-4 md:p-12 flex flex-col items-center mt-24">
        <h1 className="text-xl font-bold text-blue-950 mb-6">Register</h1>
          <div className="w-full md:w-1/2">
            <RegisterForm />
          </div>
        </div>
      </CenterLayout>
      <Footer/>
    </div>
  );
};

export default Register;
