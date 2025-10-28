import Footer from "../components/Footer";
import Logo from "../components/Logo";

const SignUpForm = () => {
    return ( 
        <>
            <div className="flex flex-col min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm w-full">
      <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-start py-3 px-6">
        <Logo />
      </div>
    </header>

      <main className="flex flex-col items-center justify-center flex-grow py-10 px-4">
        <div className="bg-white w-full max-w-2xl rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-8">Criar Conta</h1>

          {/* Informações pessoais */}
          <section className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Informações Pessoais</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">Nome completo *</label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">CPF *</label>
                <input
                  type="text"
                  placeholder="Digite seu CPF"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">Celular *</label>
                <input
                  type="tel"
                  placeholder="Digite seu número"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">E-mail *</label>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">Senha *</label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
              </div>
            </form>
          </section>

          {/* Informações de entrega */}
          <section>
            <h2 className="text-lg font-medium text-gray-700 mb-4">Informações de Entrega</h2>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">Endereço *</label>
                <input
                  type="text"
                  placeholder="Digite seu endereço"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1">Cidade *</label>
                  <input
                    type="text"
                    placeholder="Digite sua cidade"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1">CEP *</label>
                  <input
                    type="text"
                    placeholder="Digite seu CEP"
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-700 mb-1">Complemento</label>
                <input
                  type="text"
                  placeholder="Digite o complemento"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 mt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 accent-pink-500 w-4 h-4"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Quero receber por e-mail as novidades da loja Digital Store. A frequência de envio pode
                  ser alterada a qualquer momento.
                </label>
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition"
              >
                Criar Conta
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
        </>
     );
}
 
export default SignUpForm;