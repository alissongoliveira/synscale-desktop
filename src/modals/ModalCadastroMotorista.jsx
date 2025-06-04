import { X, Tag, User, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ModalCadastroMotorista({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center font-jetbrains-mono">
      <div className="bg-white w-[750px] rounded shadow-lg relative p-4">
        {/* Cabeçalho */}
        <div className="bg-slate-200 px-4 py-2 text-sm font-semibold tracking-widest rounded flex justify-between items-center">
          <span className="mx-auto">CADASTRO DE MOTORISTA</span>
          <button onClick={onClose} className="text-gray-700 hover:text-black">
            <X size={18} />
          </button>
        </div>

        {/* Corpo */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Coluna esquerda */}
          <div className="space-y-2">
            <CampoEstatico icon={<Tag size={16} />} value="001" />
            <CampoEditavel icon={<User size={16} />} placeholder="CPF" />
            <CampoEditavel
              icon={<User size={16} />}
              placeholder="Nome Completo"
            />
            <CampoEditavel icon={<User size={16} />} placeholder="RG" />
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
