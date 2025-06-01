import { X } from "lucide-react";
import { useState } from "react";
import Toast from "../components/Toast";

export default function ModalSolicitacaoComplemento({
  visible,
  onClose,
  balanca,
}) {
  const [placa, setPlaca] = useState("");
  const [tara, setTara] = useState("");
  const [liquido, setLiquido] = useState("");
  const [toast, setToast] = useState(null);

  if (!visible) return null;

  const dataAtual = new Date();
  const data = dataAtual.toLocaleDateString();
  const hora = dataAtual.toLocaleTimeString();
  const bruto = Number(tara) + Number(liquido);

  const enviarSolicitacao = async () => {
    // Validação simples
    if (!placa.trim() || !tara || !liquido) {
      setToast({
        type: "error",
        message: "Preencha todos os campos obrigatórios.",
      });
      return;
    }

    try {
      console.log("Enviando solicitação:", {
        placa,
        tara,
        liquido,
        bruto,
        data,
        hora,
        balanca: balanca?.nome,
      });

      // Simula sucesso
      setToast({
        type: "success",
        message: "Solicitação enviada com sucesso!",
      });

      // Limpa os campos
      setPlaca("");
      setTara("");
      setLiquido("");
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "Erro ao enviar solicitação!" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 font-mono">
      <div
        className="bg-[#F1F4EF] w-[600px] rounded-md shadow p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="bg-[#D9D9D9] text-center py-2 font-bold tracking-wider text-sm relative rounded">
          SOLICITAÇÃO DE COMPLEMENTO - {balanca?.nome}
          <button
            onClick={onClose}
            className="absolute right-4 top-1 text-slate-800"
          >
            <X size={18} />
          </button>
        </div>

        {/* Campos */}
        <div className="flex flex-col gap-3 mt-4 text-sm">
          <div>
            <label className="text-xs">Placa do Veículo</label>
            <input
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              className="w-full px-3 py-2 rounded border"
              placeholder="ABC-1234"
            />
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs">Data</label>
              <input
                type="text"
                value={data}
                disabled
                className="w-full px-3 py-2 rounded border bg-slate-200"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs">Hora</label>
              <input
                type="text"
                value={hora}
                disabled
                className="w-full px-3 py-2 rounded border bg-slate-200"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs">Tara (kg)</label>
              <input
                type="number"
                value={tara}
                onChange={(e) => setTara(e.target.value)}
                className="w-full px-3 py-2 rounded border"
                placeholder="Ex: 8000"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs">Líquido (kg)</label>
              <input
                type="number"
                value={liquido}
                onChange={(e) => setLiquido(e.target.value)}
                className="w-full px-3 py-2 rounded border"
                placeholder="Ex: 14000"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs">Bruto (kg)</label>
              <input
                type="text"
                value={bruto || ""}
                disabled
                className="w-full px-3 py-2 rounded border bg-slate-200"
              />
            </div>
          </div>
        </div>

        {/* Botão */}
        <div className="flex justify-end mt-6">
          <button
            onClick={enviarSolicitacao}
            className="bg-slate-800 text-white px-4 py-2 rounded text-sm hover:bg-slate-700 transition"
          >
            Enviar Solicitação
          </button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
