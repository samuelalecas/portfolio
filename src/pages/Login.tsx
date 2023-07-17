import { CenterLayout } from "../components/layouts/CenterLayout.component";
import { Header } from "../components/moleculi/Header.component";
import { LoginForm } from "../components/moleculi/Login.component";

const Login = () => {
  return (
    <div className="max-w-screen max-h-screen">
      <Header />
      <CenterLayout width="900">
        <div className="w-full p-4 md:p-12 flex flex-col items-center mt-16">
        <h1 className="text-xl font-bold text-blue-950 mb-6">Login</h1>
          <div className="w-full md:w-1/2">
            <LoginForm />
          </div>
        </div>
      </CenterLayout>
    </div>
  );
};

export default Login;
