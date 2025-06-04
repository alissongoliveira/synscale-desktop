import { X, Tag, User, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ModalCadastroProduto({ onClose }) {
  const [unidade, setUnidade] = useState("KG");

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center font-jetbrains-mono">
      <div className="bg-white w-[700px] rounded shadow-lg relative p-4">
        {/* Cabeçalho */}
        <div className="bg-slate-200 px-4 py-2 text-sm font-semibold tracking-widest rounded flex justify-between items-center">
          <span className="mx-auto">CADASTRO DE PRODUTO</span>
          <button onClick={onClose} className="text-gray-700 hover:text-black">
            <X size={18} />
          </button>
        </div>

        {/* Corpo */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Coluna esquerda */}
          <div className="space-y-2">
            <CampoEstatico icon={<Tag size={16} />} value="001" />
            <CampoEditavel
              icon={<User size={16} />}
              placeholder="Nome do Produto"
            />
            <CampoEditavel
              icon={<User size={16} />}
              placeholder="Apelido do Produto"
            />

            {/* Unidade - seletor */}
            <div className="flex items-center gap-2 border rounded px-2 py-1 text-sm bg-white">
              <User size={16} />
              <label className="w-full flex justify-between items-center">
                Unidade
                <select
                  value={unidade}
                  onChange={(e) => setUnidade(e.target.value)}
                  className="bg-transparent outline-none"
                >
                  <option value="KG">KG</option>
                  <option value="TN">TN</option>
                </select>
              </label>
            </div>
          </div>

          {/* Coluna direita */}
          <div>
            <div className="flex items-start gap-2 border rounded px-2 py-1 h-[208px] bg-white">
              <MessageSquare size={16} />
              <textarea
                placeholder="Observação"
                className="w-full bg-transparent resize-none outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Botão Salvar */}
        <div className="mt-6 flex justify-center">
          <button className="bg-slate-800 text-white px-8 py-2 rounded text-sm shadow">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

const CampoEstatico = ({ icon, value }) => (
  <div className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded text-sm">
    {icon}
    <span>{value}</span>
  </div>
);

const CampoEditavel = ({ icon, placeholder }) => (
  <div className="flex items-center gap-2 border rounded px-2 py-1 text-sm bg-white">
    {icon}
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent w-full outline-none"
    />
  </div>
);
