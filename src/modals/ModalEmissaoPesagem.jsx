import { useState } from "react";
import { X, Plus, Search, Trash2, Pencil } from "lucide-react";

export default function ModalEmissaoPesagem({ visible, onClose }) {
  const [numero, setNumero] = useState("001");

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center font-mono">
      <div
        className="bg-white w-[640px] rounded shadow-lg relative p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="absolute top-0 left-0 right-0 bg-slate-300 text-center py-2 font-bold tracking-wider text-sm">
          EMISSÃO DE PESAGENS
          <button onClick={onClose} className="absolute right-4 top-2">
            <X size={18} />
          </button>
        </div>

        <div className="mt-12 flex gap-4">
          {/* Lado esquerdo */}
          <div className="flex-1 border rounded p-4 flex flex-col items-center justify-center">
            <span className="text-sm font-bold tracking-widest mb-2">
              NÚMERO DA PESAGEM
            </span>
            <input
              type="text"
              value={numero.padStart(3, "0")}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, ""); // apenas números
                setNumero(raw.slice(0, 3)); // até 3 dígitos
              }}
              className="bg-slate-200 text-xl font-bold tracking-widest text-center px-6 py-2 rounded w-32 outline-none"
            />
          </div>

          {/* Lado direito */}
          <div className="w-1/2 border rounded divide-y text-sm">
            <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-slate-100">
              <Pencil size={16} />
              Editar
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-slate-100">
              <Plus size={16} />
              Criar
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-slate-100">
              <Search size={16} />
              Pesquisar
            </button>
            <button className="w-full flex items-center gap-2 px-4 py-3 hover:bg-slate-100 text-red-600">
              <Trash2 size={16} />
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
