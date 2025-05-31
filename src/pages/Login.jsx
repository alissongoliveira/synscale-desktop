import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario === "admin" && senha === "1234") {
      setToast({ type: "success", message: "Login efetuado com sucesso!" });
      setTimeout(() => {
        setToast(null);
        navigate("/home");
      }, 1500);
    } else {
      setToast({ type: "error", message: "Usuário ou senha inválidos." });
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F1F4EF] font-mono">
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

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
