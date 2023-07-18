import { useNavigate } from "react-router-dom";
import { Button } from "../components/atoms/button/Button.component";
import { CenterLayout } from "../components/layouts/CenterLayout.component";
import { Footer } from "../components/moleculi/Footer.component";
import { Header } from "../components/moleculi/Header.component";
import { LoginForm } from "../components/moleculi/LoginForm.component";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen max-h-screen">
      <Header />
      <CenterLayout width="900">
        <div className="w-full p-4 md:p-12 flex flex-col items-center my-16">
          <h1 className="text-xl font-bold text-blue-950 mb-6">Login</h1>
          <div className="w-full md:w-1/2 mb-6">
            <LoginForm />
          </div>
          <div className="flex">
            <p className="mr-2">¿No eres usuario?</p> <Button name="Regístrate" width="0" variant="link" onClick={() => navigate("/register")} />
          </div>
        </div>
      </CenterLayout>
      <Footer />
    </div>
  );
};

export default Login;
