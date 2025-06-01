import { X, Tag, Network, Usb } from "lucide-react";

export default function ModalEditarBalanca({ visible, onClose, balanca }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-mono">
      <div className="bg-white w-[320px] rounded shadow-lg p-4 relative">
        {/* Cabeçalho */}
        <div className="bg-slate-200 py-2 px-4 font-bold text-center text-sm tracking-wider relative">
          EDITAR BALANÇA
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-slate-800"
          >
            <X size={18} />
          </button>
        </div>

        {/* Formulário */}
        <div className="p-4 space-y-2">
          {/* Nome */}
          <div className="flex items-center border border-slate-300">
            <div className="w-10 flex justify-center items-center border-r border-slate-300">
              <Tag size={16} />
            </div>
            <input
              type="text"
              defaultValue={balanca?.nome || ""}
              placeholder="Nome"
              className="w-full text-sm px-2 h-10 outline-none"
            />
          </div>

          {/* IP */}
          <div className="flex items-center border border-slate-300">
            <div className="w-10 flex justify-center items-center border-r border-slate-300">
              <Network size={16} />
            </div>
            <input
              type="text"
              defaultValue={balanca?.ip || ""}
              placeholder="IP"
              className="w-full text-sm px-2 h-10 outline-none"
            />
          </div>

          {/* Porta */}
          <div className="flex items-center border border-slate-300">
            <div className="w-10 flex justify-center items-center border-r border-slate-300">
              <Usb size={16} />
            </div>
            <input
              type="text"
              defaultValue={balanca?.porta || ""}
              placeholder="Porta"
              className="w-full text-sm px-2 h-10 outline-none"
            />
          </div>

          {/* Botão salvar */}
          <div className="mt-4 flex flex-col items-center gap-2">
            <button className="bg-slate-800 text-white px-6 py-2 text-sm rounded">
              Salvar
            </button>
            <p className="text-xs text-red-600 text-center w-full">
              Somente Usuários Com Privilégio, <br /> Podem Fazer Isso!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
