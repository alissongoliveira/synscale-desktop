import { Building2, MapPin, X } from "lucide-react";

const campos = [
  { label: "Nome Empresarial", icon: <Building2 size={18} /> },
  { label: "Nome Fantasia", icon: <Building2 size={18} /> },
  { label: "CNPJ", icon: <Building2 size={18} /> },
  { label: "I.E", icon: <Building2 size={18} /> },
  { label: "Endereço", icon: <Building2 size={18} /> },
  { label: "Complemento", icon: <MapPin size={18} /> },
  { label: "Cidade", icon: <MapPin size={18} /> },
  { label: "CEP", icon: <MapPin size={18} /> },
];

export default function ModalEmpresa({ visible, onClose }) {
  console.log("ModalEmpresa montado, visible:", visible);
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center font-mono">
      <div
        className="bg-white w-[720px] rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Título */}
        <div className="bg-slate-200 p-4 flex items-center justify-between relative">
          <h2 className="text-center w-full font-bold tracking-wider text-sm">
            DADOS DA EMPRESA
          </h2>
          <button onClick={onClose} className="absolute right-4 text-slate-800">
            <X size={18} />
          </button>
        </div>

        {/* Formulário */}
        <div className="flex p-4 gap-8">
          <div className="flex-1 space-y-1">
            {campos.map(({ label, icon }) => (
              <div
                key={label}
                className="flex items-center border border-slate-300 h-10"
              >
                <div className="w-10 flex items-center justify-center bg-white border-r border-slate-300">
                  {icon}
                </div>
                <input
                  type="text"
                  placeholder={label}
                  className="w-full px-2 outline-none text-sm"
                />
              </div>
            ))}
          </div>

          {/* Ações */}
          <div className="flex flex-col items-center justify-center gap-4">
            <button className="bg-slate-800 text-white text-sm px-6 py-2 rounded">
              Salvar
            </button>
            <span className="text-xs text-red-600 text-center w-40">
              Somente Usuários Com Privilégio, Podem Fazer Isso!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
