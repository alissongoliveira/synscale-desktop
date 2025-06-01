import { X, Scale, Settings, Circle, ServerCrash } from "lucide-react";
import { useState } from "react";
import ModalEditarBalanca from "./ModalEditarBalanca";

export default function ModalMonitoramento({ visible, onClose }) {
  const [modalEditarAberto, setModalEditarAberto] = useState(false);
  const [balancaSelecionada, setBalancaSelecionada] = useState(null);

  if (!visible) return null;

  const abrirEdicao = (dados) => {
    setBalancaSelecionada(dados);
    setModalEditarAberto(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-mono">
      <div
        className="bg-[#F1F4EF] w-[880px] min-h-[600px] rounded-md shadow-lg p-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="bg-[#D9D9D9] text-center py-2 font-bold tracking-wider text-sm relative">
          PAINEL DE CONTROLE
          <button
            onClick={onClose}
            className="absolute right-4 top-2 text-slate-800"
          >
            <X size={18} />
          </button>
        </div>

        {/* Painéis das balanças */}
        <div className="flex gap-4 mt-4">
          {/* Balança 01 */}
          <div className="bg-[#E1E1E1] flex-1 rounded p-3 relative">
            <div className="flex items-center justify-between mb-2">
              <button className="flex items-center gap-1 bg-white border text-green-600 text-xs px-2 py-1 rounded">
                <Circle className="fill-green-600" size={10} />
                ONLINE
              </button>
              <span className="text-xs">BALANÇA 01</span>
              <Settings
                size={16}
                className="cursor-pointer"
                onClick={() =>
                  abrirEdicao({
                    nome: "BALANÇA 01",
                    ip: "111.111.1.111",
                    porta: 2222,
                  })
                }
              />
            </div>
            <div className="text-6xl text-center font-bold mt-6">21500</div>
          </div>

          {/* Balança 02 */}
          <div className="bg-[#E1E1E1] flex-1 rounded p-3 relative">
            <div className="flex items-center justify-between mb-2">
              <button className="flex items-center gap-1 bg-white border text-red-600 text-xs px-2 py-1 rounded">
                <Circle className="fill-red-600" size={10} />
                OFFLINE
              </button>
              <span className="text-xs">BALANÇA 02</span>
              <Settings
                size={16}
                className="cursor-pointer"
                onClick={() =>
                  abrirEdicao({
                    nome: "BALANÇA 02",
                    ip: "222.222.2.222",
                    porta: 3333,
                  })
                }
              />
            </div>
            <div className="text-6xl text-center text-black mt-6">
              <ServerCrash size={48} className="mx-auto" />
            </div>
          </div>
        </div>

        {/* Ações de complemento */}
        <div className="mt-4 flex flex-col gap-2">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="bg-white flex items-center justify-between px-4 py-2 rounded border"
            >
              <div className="flex items-center gap-2 text-sm">
                <Scale size={16} />
                BALANÇA 0{n}
              </div>
              <button className="bg-slate-800 text-white px-3 py-1 rounded text-sm">
                Complemento
              </button>
            </div>
          ))}
        </div>

        {/* Histórico de Pesagem */}
        <div className="mt-6 grid grid-cols-4 gap-1 bg-[#E1E1E1] p-4 rounded text-xs">
          <div className="font-bold col-span-4 mb-2">HISTÓRICO DE PESAGEM</div>
          <div className="font-bold">DATA</div>
          <div className="font-bold">HORA</div>
          <div className="font-bold">BALANÇA</div>
          <div className="font-bold">PESO</div>

          <div>30/07/2025</div>
          <div>15:30:01</div>
          <div>01</div>
          <div>21500</div>

          <div>30/07/2025</div>
          <div>15:32:00</div>
          <div>02</div>
          <div>60000</div>
        </div>
      </div>

      {/* Modal de edição de balança */}
      <ModalEditarBalanca
        visible={modalEditarAberto}
        onClose={() => setModalEditarAberto(false)}
        balanca={balancaSelecionada}
      />
    </div>
  );
}
