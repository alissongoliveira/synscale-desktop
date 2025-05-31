import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { usuario, senha });
    // Aqui futuramente teremos logica de autenticação
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F1F4EF] font-mono">
      <div className="text-center mb-6">
        <img
          src="/logo.png"
          alt="Logo SynScale"
          className="h-40 mx-auto mb-2"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-center text-lg font-bold mb-6 text-slate-900">
          Acesse sua conta
        </h2>

        <label className="block text-slate-800 font-bold mb-1">
          Seu usuário
        </label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="w-full p-2 mb-4 border border-slate-200 bg-slate-100 rounded"
        />

        <label className="block text-slate-800 font-bold mb-1">Sua senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-2 mb-6 border border-slate-200 bg-slate-100 rounded"
        />

        <button
          type="submit"
          className="w-full bg-slate-800 hover:bg-slate-900 text-white py-2 px-4 rounded transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
