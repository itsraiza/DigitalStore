import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const SignUp = () => {
    return (
        <>
           <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-start py-3 px-6">
        <Logo />
      </div>
    </header>

      <main className="flex flex-col items-center justify-center flex-grow bg-gradient-to-tr from-purple-200 via-purple-300 to-purple-400">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl p-6 md:p-12">
          
          {/* Caixa de cadastro */}
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Crie sua conta
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Já possui uma conta?{" "}
              <Link to={"/login"} className="text-pink-500 font-medium">
                Faça login aqui
              </Link>
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="E-mail"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <Link to={"/signupform"}>
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition"
                
                >
                Criar Conta
              </button>
                  </Link>
            </form>

            <div className="flex items-center justify-center mt-6">
              <p className="text-gray-600 text-sm mr-2">Ou faça login com:</p>
              <div className="flex gap-3">
                <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  
                </button>
                <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
                  
                </button>
              </div>
            </div>
          </div>

          {/* Imagem lateral */}
          <div className="hidden md:flex flex-col items-center justify-center ml-10">
            <img
              src="/loginimage.png"
              alt="Tênis"
              className="w-[320px]"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
        </>
    );
}

export default SignUp;