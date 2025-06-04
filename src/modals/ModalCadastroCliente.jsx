import { useState } from "react";
import {
  X,
  Tag,
  User,
  Contact,
  Briefcase,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ModalCadastroCliente({ onClose }) {
  const [tipoPessoa, setTipoPessoa] = useState("Física");

  const isFisica = tipoPessoa === "Física";
  const isJuridica = tipoPessoa === "Jurídica";

  const desabilita = (condicao) =>
    condicao ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white";

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center font-jetbrains-mono">
      <div className="bg-white w-[750px] rounded shadow-lg relative p-4">
        {/* Cabeçalho */}
        <div className="bg-slate-200 px-4 py-2 text-sm font-semibold tracking-widest rounded flex justify-between items-center">
          <span className="mx-auto">CADASTRO DE CLIENTE</span>
          <button onClick={onClose} className="text-gray-700 hover:text-black">
            <X size={18} />
          </button>
        </div>

        {/* Corpo */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Coluna esquerda */}
          <div className="space-y-2">
            <CampoEstatico icon={<Tag size={16} />} value="001" />

            {/* Tipo de Pessoa */}
            <div className="flex items-center gap-2 bg-white border rounded px-2 py-1 text-sm">
              <User size={16} />
              <label className="w-full flex items-center justify-between">
                Tipo de Pessoa
                <select
                  value={tipoPessoa}
                  onChange={(e) => setTipoPessoa(e.target.value)}
                  className="bg-transparent outline-none"
                >
                  <option value="Física">Pessoa Física</option>
                  <option value="Jurídica">Pessoa Jurídica</option>
                </select>
              </label>
            </div>

            {/* Campos condicionais */}
            <CampoEditavel
              icon={<User size={16} />}
              placeholder="CPF"
              disabled={isJuridica}
            />
            <CampoEditavel
              icon={<Briefcase size={16} />}
              placeholder="CNPJ"
              disabled={isFisica}
            />
            <CampoEditavel
              icon={<User size={16} />}
              placeholder="Nome Completo"
              disabled={isJuridica}
            />
            <CampoEditavel
              icon={<Briefcase size={16} />}
              placeholder="Nome Empresarial"
              disabled={isFisica}
            />
            <CampoEditavel
              icon={<Briefcase size={16} />}
              placeholder="Nome Fantasia"
              disabled={isFisica}
            />
            <CampoEditavel
              icon={<User size={16} />}
              placeholder="RG"
              disabled={isJuridica}
            />
            <CampoEditavel
              icon={<Briefcase size={16} />}
              placeholder="I.E"
              disabled={false}
            />
          </div>

          {/* Coluna direita */}
          <div className="space-y-2">
            <CampoEditavel icon={<Mail size={16} />} placeholder="E-mail" />
            <CampoEditavel icon={<Phone size={16} />} placeholder="Celular" />
            <CampoEditavel icon={<MapPin size={16} />} placeholder="Rua" />
            <CampoEditavel
              icon={<MapPin size={16} />}
              placeholder="Complemento"
            />
            <CampoEditavel icon={<MapPin size={16} />} placeholder="Bairro" />
            <CampoEditavel icon={<MapPin size={16} />} placeholder="CEP" />
            <div className="flex items-start gap-2 border rounded px-2 py-1 h-[88px] bg-white">
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

const CampoEditavel = ({ icon, placeholder, disabled }) => (
  <div
    className={`flex items-center gap-2 border rounded px-2 py-1 text-sm ${
      disabled ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-white"
    }`}
  >
    {icon}
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      className="bg-transparent w-full outline-none"
    />
  </div>
);
